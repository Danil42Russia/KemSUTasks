document.addEventListener('DOMContentLoaded', main);

function main() {
  const firstName = prompt('Введите первое имя');
  if (isNullOrBlank(firstName)) {
    alert('Ошибка: Имя не должно быть пустым');
    return;
  }

  const secondName = prompt('Введите второе имя');
  if (isNullOrBlank(secondName)) {
    alert('Ошибка: Имя не должно быть пустым');
    return;
  }

  const result = randomIntFromInterval(0, 100);

  alert(`${firstName} подходит к ${secondName} на ${result} процентов!`);
}
