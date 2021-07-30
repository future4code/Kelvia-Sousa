function highestCommonPrefix(string: string[]): string {
  let prefix = ""

  if(string === null || string.length === 0) return prefix

  for (let i = 0; i < string[0].length; i++) {
    const character = string[0][i]
    for (let j = 1; j < string.length; j++) {
    if (string[j][i] !== character) return prefix
  }
  prefix = prefix + character
}
  
  return prefix
}

console.log(highestCommonPrefix(["flower","flow","flight"]));
console.log(highestCommonPrefix(["dog","racecar","car"]));
console.log(highestCommonPrefix(["coracao","cor","corona","coreia"]));
