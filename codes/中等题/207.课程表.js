let canFinish = (numCourses, prerequisites) => {
  const graph = new Digraph(numCourses);

  for (let item of prerequisites) {
    graph.addEdge(item[0], item[1]);
  }

  return !graph.hasCycle();
}

class Digraph {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v).fill(0).map(item => []);
  }

  addEdge(x, y) {
    this.adj[x].push(y);
  }

  hasCycle() {
    const fn = (x) => {
      onStack[x] = true;
      marked[x] = true;

      for (let y of this.adj[x]) {
        if (!marked[y]) {
          if (fn(y)) return true;
        } else if (onStack[y]) {
          return true;
        }
      }

      onStack[x] = false;
      return false;
    }

    const marked = new Array(this.V).fill(false);
    const onStack = new Array(this.V).fill(false);

    for (let x = 0; x < this.V; x++) {
      if (!marked[x]) {
        if (fn(x)) return true;
      }
    }

    return false;
  }
}
