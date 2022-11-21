document.getElementById('button_ok').addEventListener('click', main);

function main() {
  const weightValue = document.getElementById('weight')?.value;
  const heightValue = document.getElementById('height')?.value;
  const text = document.getElementById('text');

  if (isNullOrBlank(weightValue)) {
    text.textContent = 'Вес не должен быть пустым';
    return;
  }

  if (isNullOrBlank(heightValue)) {
    text.textContent = 'Рост не должен быть пустым';
    return;
  }

  const bmiIndex = calculateBMI(parseInt(weightValue), parseInt(heightValue));
  text.textContent = textBMI(bmiIndex);
}

/**
 * @param bmiIndex {number} ИМТ
 * @return {string}
 */
function textBMI(bmiIndex) {
  if (bmiIndex <= 18.5) {
    return 'Недостаточный вес';
  }

  if (bmiIndex <= 25) {
    return 'Нормально';
  }

  if (bmiIndex <= 30) {
    return 'У вас излишек веса';
  }

  return 'Ожирение';
}

/**
 * @param weight {number} Вес в килограммах
 * @param height {number} Рост в сантиметрах
 * @return {number}
 */
function calculateBMI(weight, height) {
  height = height / 100;

  return weight / Math.pow(height, 2);
}
