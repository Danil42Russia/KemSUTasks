/**
 * Возвращает true, если строка null или пустая.
 *
 * @param line {?String}
 * @return {Boolean}
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
 * @param min {Number}
 * @param max {Number}
 * @return {Number}
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
