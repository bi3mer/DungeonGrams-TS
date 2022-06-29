export class PolicyIteration {
  private readonly K = 20;
  private readonly GAMMA = 0.75;

  private visited: Set<string> = new Set();
  
  constructor(private graph: Map<string, {R: number, U: number, L: [string]}>) {
    this.resetUtility();
  }

  public get(node: string): string {
    // @TODO: When this is called, the thing calling it should make sure that 
    //        the last node does not end with an incomplete structure.
    return this.bestNeighbor(node);
  }

  public getStartingNode(): string {
    // @TODO: this should only choose nodes that do not start with an 
    //        incomplete structure.
    const a = Array.from(this.visited);
    return a[Math.floor(Math.random() *a.length)];
  }

  public updateFromPlayThrough() {
    console.error("Not implemented yet!") 
  }

  public update() {
    // Utility values are reset to 0 to avoid getting stuck in a local minima
    // when re-running
    this.resetUtility()

    // initialize random policy
    let pi: Map<string, string> = new Map();
    for (let n in this.graph) {
      pi.set(n, this.randomNeighbor(n));
    }

    // @TODO:
    //    1. Did I mess up GPCGRL? The code looks like it doesn't calculate 
    //       the new policy correctly.
    //    2. I'm using a modified policy evaluation but I could just use value
    //       iteration here. It wouldn't hurt.
    //    3. My logic for when Policy Iteration should stop in GPCGRL seems odd.

    // Policy Iteration loop
    let changed = true;
    while (changed) {
      // simplified policy evaluation
      for (let i = 0; i < this.K; ++i) {
        for (let n in this.graph) {
          const u = this.getU(pi.get(n)!); 
          const r = this.getR(n);
          this.setU(n, r + this.GAMMA*u); 
        }
      }

      // policy improvement
      changed = false;
      for (let n in this.graph) {
        let old = pi.get(n)!;
        let bestN = "";
        let bestU = -Number.MAX_VALUE;

        for (let newN in this.getNeighbors(n)) {
          const newU = this.getU(newN);
          if (newU > bestU) {
            bestU = newU;
            bestN = newN;
          }
        }

        if (old != bestN) {
          pi.set(n, bestN);
          changed = true;
        }
      }

    }
  }

  // Utility functions
  private getR(node: string): number {
    return this.graph.get(node)!.R;
  }

  private setR(node: string, value: number): void {
    this.graph.get(node)!.R = value;
  }

  private getU(node: string): number {
    return this.graph.get(node)!.U;
  }

  private setU(node: string, value: number): void {
    this.graph.get(node)!.U = value;
  }

  private getNeighbors(node: string): [string] {
    return this.graph.get(node)!.L;
  }

  private resetUtility(): void {
    for(let n in this.graph) {
      this.setU(n, 0);
    }
  }

  private bestNeighbor(node: string): string {
    let bestN = "";
    let bestU = -Number.MAX_VALUE;

    for(let n in this.getNeighbors(node)) {
      const U = this.getU(node);

      if (U > bestU) {
        bestU = U;
        bestN = n;
      }
    }

    return bestN;
  }

  private randomNeighbor(node: string): string {
    const n = this.getNeighbors(node);
    return n[Math.floor(Math.random() * n.length)];;
  }
};