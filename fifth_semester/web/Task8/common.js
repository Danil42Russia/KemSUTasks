/**
 * Возвращает true, если строка null или пустая.
 *
 * @param line {?string}
 * @return {boolean}
 */
function isNullOrBlank(line) {
  if (line === null || line === undefined) {
    return true;
  }

  return line.trim() === '';
}

/**
 * Возвращает случайное целое число в заданном интервале, включительно.
 *
 * @param min {number}
 * @param max {number}
 * @return {number}
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
