const Trie = function() {
  this.root = {};
}

Trie.prototype.insert = function(word) {
  let cur = this.root;

  let i = 0;
  while (word[i]) {
    const char = word[i++];

    if (!cur[char]) {
      cur[char] = {};
    } 
    
    cur = cur[char];
  }

  cur.hasWord = true;
}

Trie.prototype.search = function(word) {
  const node = this.searchPrefix(word);

  return node ? !!node.hasWord : false;
}

Trie.prototype.startsWith = function(prefix) {
  return !!this.searchPrefix(prefix)
}

// 封装一个公共方法
Trie.prototype.searchPrefix = function(prefix) {
  let cur = this.root;

  for (let char of prefix) {
    if (!cur[char]) return false;

    cur = cur[char];
  }

  // 把以 prefix 为前缀的树返回
  return cur;
}
