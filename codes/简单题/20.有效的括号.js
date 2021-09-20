const isValid = s => {
  const stack = [];
  const left = ['(', '[', '{']

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (left.includes(char)) {
      stack.push(char);
    } else {
      switch (char) {
        case ')': 
          if (stack[stack.length - 1] !== '(') return false;
          break;
        case ']':
          if (stack[stack.length - 1] !== '[') return false;
          break;
        case '}':
          if (stack[stack.length - 1] !== '{') return false;
          break;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}