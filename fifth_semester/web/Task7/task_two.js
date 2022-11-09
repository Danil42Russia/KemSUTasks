/**
 * Проверка, что слово палиндром
 *
 * @param line {String}
 * @return {Boolean}
 */
function isPalindrome(line) {
  const reverseLine = line.split('').reverse().join('');

  return line === reverseLine;
}
