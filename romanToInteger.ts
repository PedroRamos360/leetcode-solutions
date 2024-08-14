const romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const nextChar = s[i + 1];
    const valueChar = romanNumbers[char];
    const valueNextChar = romanNumbers[nextChar];
    if (!nextChar || valueChar >= valueNextChar) {
      result += romanNumbers[char];
    }
    if (valueChar < valueNextChar) {
      result += valueNextChar - valueChar;
      i++;
    }
  }
  return result;
}
