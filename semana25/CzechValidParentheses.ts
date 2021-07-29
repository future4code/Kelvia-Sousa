function czech_valid_parentheses(string: string): boolean {
  const stack = [];
  const characters = { ')': '(', '}': '{', ']': '['};

  for (const character of string) {
    if(!characters[character]){
      stack.push(character)
    }else if(stack.pop() !== characters[character]){
      return false;
    }
  }
  return stack.length === 0;
}

console.log(czech_valid_parentheses(""));
