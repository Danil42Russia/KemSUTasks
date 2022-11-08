/**
 * Проверка, что слово палиндром
 *
 * @param line {String}
 * @return {Boolean}
 */
function isPalindrome(line) {
  const reverse_line = line.split('').reverse().join('');

  return line === reverse_line;
}
