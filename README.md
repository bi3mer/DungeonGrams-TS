# DungeonGrams

With a TypeScript implementation.


## Creating Graph

I use levels created with [Gram-Elites](https://github.com/bi3mer/GramElites) and link them together with [past work](https://github.com/bi3mer/LinkingLevelSegments). The graph is based on [GPCGRL](https://github.com/crowdgames/gpcgrl.git), which uses policy iteration. The code below is the python script I wrote to take the data from [Gram-Elites data](https://github.com/bi3mer/GramElitesData), which is the repo which has all the data, and convert them into two TypeScript files, which the game uses to serve dynamic levels to the user based on their performance. 

```python
import networkx as nx
import json

with open('links_False.json', 'r') as f:
  link_data = json.load(f)

max_values = [0,0]
G = nx.DiGraph()

def set_max_values(key):
  a,b,_ = key.split('_')
  a,b = int(a), int(b)
  max_values[0] = max(max_values[0], a)
  max_values[1] = max(max_values[1], b)

# Build networkx graph. Edges are add iff the combination of two levels are
# fully playable. -1 represents that the level is playable but no link in the
# middle was necessary.
for src in link_data:
  src_key = '_'.join(src.split(','))
  set_max_values(src_key)
  
  for tgt in link_data[src]:
    tgt_key = '_'.join(tgt.split(','))
    set_max_values(tgt_key)

    ts = link_data[src][tgt]['tree search']
    pp = ts['percent_playable']
    if pp == 1.0 or  pp == -1.0:
      G.add_edge(src_key, tgt_key)

# Find largest subgraph so there are no leaves.
# https://github.com/crowdgames/gpcgrl/blob/main/Utility/util.py
def largest_connected_subgraph(graph):
    biggest_comp = None
    for comp in nx.strongly_connected_components(graph):
        if biggest_comp == None or len(comp) > len(biggest_comp):
            biggest_comp = comp

    return graph.subgraph(biggest_comp).copy() 

G = largest_connected_subgraph(G)

# Error checking 
for n in G:
  assert 0 != len(G.out_edges(n))

# build json dictionary
links = {}
for src in G.nodes:
  a,b,_ = src.split('_')
  a = float(a) / max_values[0]
  b = float(b) / max_values[1]

  links[src] = {
    'R': (a+b) / 2, 
    'U': 0, 
    'L': [tgt for tgt in G.out_edges(src)]}

# Get levels that are apart of the graph
levels = {}
for f_name in G.nodes:
  with open(f'levels/{f_name}.txt', 'r') as f:
    levels[f_name] = [l.strip() for l in f.readlines()]

# Save results to a TypeScript file
with open('LinkLevelGraph.ts', 'w') as f:
  f.write(f'export const LINKS = {json.dumps(links)};')
  f.write('\n\n')
  f.write(f'export const LEVELS = {json.dumps(levels)};')
```