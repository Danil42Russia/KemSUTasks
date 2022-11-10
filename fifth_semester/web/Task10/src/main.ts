import random from 'random';
import seedRandom from 'seedrandom';
import naturalCompare from 'natural-compare';
import sha256 from 'crypto-js/sha256';
import * as lodash from 'lodash';

const firstName = document.getElementById('first_name') as HTMLInputElement;
const secondName = document.getElementById('second_name') as HTMLInputElement;

const progress = document.getElementById('progress') as HTMLProgressElement;
const progressLabel = document.getElementById('label_progress') as HTMLLabelElement;

document.addEventListener('DOMContentLoaded', function() {
  const listeners = (event: Event) => {
    inputChange(event);
    nameHasher();
  };

  [firstName, secondName].forEach(element => {
    inputValidate(element);
    element.addEventListener('input', listeners);
  });
});

function cleanProgress() {
  progress.value = 0;
  progressLabel.innerText = '';
}

function inputChange(event: Event) {
  const target = event.target as HTMLInputElement;

  inputValidate(target);
}

function inputValidate(target: HTMLInputElement) {
  const errorLabelName = 'label_' + lodash.trimEnd(target.id, '_name');
  const errorLabel = document.getElementById(errorLabelName) as HTMLLabelElement;

  if (!isBlank(target.value)) {
    errorLabel.innerText = '';
  } else {
    cleanProgress();
    errorLabel.innerText = 'имя не должно быть пустым';
    errorLabel.style.color = 'red';
  }
}

function nameHasher() {
  const firstValue = firstName?.value;
  if (isBlank(firstValue)) {
    return;
  }

  const secondValue = secondName?.value;
  if (isBlank(secondValue)) {
    return;
  }

  const result = hashedName(firstValue, secondValue);
  progress.value = result;
  progressLabel.innerText = `${result}%`;
}

function hashedName(firstName: string, secondName: string): number {
  const names = [firstName, secondName]
    .map(name => normalizedName(name));

  // Если два имени одинаковы, вернём 50%
  if (lodash.uniq(names).length === 1) {
    return 50;
  }

  let hashName = names.sort(naturalCompare).join('-');
  hashName = sha256(hashName).toString();

  // @ts-ignore
  random.use(seedRandom(hashName));

  return random.int(1, 100);
}

function normalizedName(name: string): string {
  return name.trim().toLowerCase();
}

function isBlank(line: string): boolean {
  return line.trim() === '';
}
