document.addEventListener('DOMContentLoaded', main);

function main() {
  const inputString = prompt('Введите имена через запятую');
  if (isNullOrBlank(inputString)) {
    alert('Список имён не должен быть пустым');
    return;
  }

  const names = inputString.split(',').map(name => name.trim()).filter(name => name !== '');
  const numberIndex = randomIntFromInterval(0, names.length - 1);

  const paymentName = names[numberIndex];
  alert(`Оплачивать будет ${paymentName}`);
}
