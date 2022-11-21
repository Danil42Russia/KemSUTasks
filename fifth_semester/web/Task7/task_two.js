/**
 * Проверка, что слово палиндром
 *
 * @param line {string}
 * @return {boolean}
 */
function isPalindrome(line) {
  const reverseLine = line.split('').reverse().join('');

  return line === reverseLine;
}
