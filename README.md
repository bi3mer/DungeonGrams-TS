# DungeonGrams

With a TypeScript implementation.


## Creating Graph

I use levels created with [Gram-Elites](https://github.com/bi3mer/GramElites) and link them together with [past work](https://github.com/bi3mer/LinkingLevelSegments). The graph is based on [GPCGRL](https://github.com/crowdgames/gpcgrl.git), which uses policy iteration. The code below is the python script I wrote to take the data from [Gram-Elites data](https://github.com/bi3mer/GramElitesData), which is the repo which has all the data, and convert them into two TypeScript files, which the game uses to serve dynamic levels to the user based on their performance. 

```python
import json

with open('links_False.json', 'r') as f:
  link_data = json.load(f)

links = {}
valid_levels = set()

max_values = [0,0]

def set_max_values(key):
  a,b,_ = key.split('_')
  a,b = int(a), int(b)
  max_values[0] = max(max_values[0], a)
  max_values[1] = max(max_values[1], b)

for src in link_data:
  src_key = '_'.join(src.split(','))
  set_max_values(src_key)
  
  for tgt in link_data[src]:
    tgt_key = '_'.join(tgt.split(','))
    set_max_values(tgt_key)

    ts = link_data[src][tgt]['tree search']
    pp = ts['percent_playable']
    if pp == 10 or  pp == -1.0:
      valid_levels.add(tgt_key)

      if src_key not in links:
        valid_levels.add(src_key)
        links[src_key] = {'R': 0, 'U': 0, 'L': [tgt_key]}
      else:
        links[src_key]['L'].append(tgt_key)

for n in links:
  a,b,_ = n.split('_')
  a = float(a) / max_values[0]
  b = float(b) / max_values[1]
  links[n]['R'] = (a+b) / 2


with open('links.ts', 'w') as f:
  f.write(f'export const LINKS = {json.dumps(links)};')

levels = {}
for f_name in valid_levels:
  with open(f'levels/{f_name}.txt', 'r') as f:
    levels[f_name] = [l.strip() for l in f.readlines()]

with open('levels.ts', 'w') as f:
  f.write(f'export const LEVELS = {json.dumps(levels)};')
```