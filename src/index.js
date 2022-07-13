module.exports = function check(str, bracketsConfig) {
  // your solution
  const reducedBracketsConfig = bracketsConfig.map((bracket) => {
    return `${bracket[0]}${bracket[1]}`;
  });

  let initialLength = str.length;

  while (str.length) {
    reducedBracketsConfig.forEach((bracket) => {
      str = str.replaceAll(bracket, '');
    });
    if (str.length === initialLength) {
      return false;
    }
    initialLength = str.length;
  }
  return true;
}