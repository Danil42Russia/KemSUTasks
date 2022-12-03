export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @description Возвращает частичную копию объекта, содержащую только указанные ключи.
 * Если ключ не существует, свойство игнорируется.
 *
 *
 * Попытка сделать pick как в lodash, но с более сильной типизацией
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const entries: ((K | T[K])[])[] = [];
  keys.forEach((key) => {
    const value = obj[key];
    if (value !== undefined) {
      entries.push([key, value]);
    }
  });

  return Object.fromEntries(entries);
}

/**
 * @description Аналогично pick, за исключением того, что этот включает пару {key: undefined} для свойств, которые не существуют.
 * @see {pick}
 *
 *
 * Попытка сделать pickAll как в ramda, но с более сильной типизацией
 */
export function pickAll<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const entries = keys.map((key) => {
    return [key, obj[key]];
  });

  return Object.fromEntries(entries);
}
