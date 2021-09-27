let findOrder = (numCources, prerequisites) => {
  const digraph = new Digraph(numCources);

  for (let [x, y] of prerequisites) {
    digraph.addEdge(x, y);
  }

  return digraph.getOrder().reversePost;
}

class Digraph {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v).fill(0).map(_ => []);
  }

  addEdge(x, y) {
    this.adj[x].push(y);
  }

  hasCycle() {
    const fn = x => {
      marked[x] = true;
      onStack[x] = true;

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

  getOrder() {
    const fn = x => {
      marked[x] = true;

      pre.push(x);

      for (let y of this.adj[x]) {
        if (!marked[y]) fn(y);
      }

      post.push(x);
      reversePost.unshift(x);
    }

    const marked = new Array(this.V).fill(false);
    const pre = []
    const post = [];
    const reversePost = [];

    for (let x = 0; x < this.V; x++) {
      if (!marked[x]) fn(x);
    }

    return {pre, post, reversePost};
  }
}
