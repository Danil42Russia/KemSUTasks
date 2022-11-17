document.addEventListener('DOMContentLoaded', main);
document.addEventListener('keydown', keyDown);

function main() {
  const drums = document.getElementsByClassName('drum');
  for (let i = 0; i < drums.length; i++) {
    const drumElement = drums[i];
    drumElement.addEventListener('click', elementClick);
  }
}

/**
 * @param event {KeyboardEvent}
 */
function keyDown(event) {
  const keyName = event.key;

  const element = getElementByShortName(keyName);
  drumByElement(element);
}

/**
 * @param event {PointerEvent}
 */
function elementClick(event) {
  const element = event.target;

  drumByElement(element);
}

/**
 * @param element {?HTMLElement}
 */
function drumByElement(element) {
  if (element === null) {
    return;
  }

  showPassedByElement(element);
  playSoundByElement(element);
}

/**
 * @param element {HTMLElement}
 */
function playSoundByElement(element) {
  playSoundByShortName(element.innerText);
}

/**
 * @param element {HTMLElement}
 */
function showPassedByElement(element) {
  element.classList.add('pressed');

  setTimeout(() => {
    element.classList.remove('pressed');
  }, 100);
}

/**
 * @param shortName {string}
 * @return {?string}
 */
function getElementNameByShortName(shortName) {
  const elementsNameMap = {
    w: 'tom-1',
    a: 'tom-2',
    s: 'tom-3',
    d: 'tom-4',
    j: 'snare',
    k: 'crash',
    l: 'kick',
  };

  return elementsNameMap[shortName] ?? null;
}

/**
 * @param soundName {string}
 */
function paySoundByName(soundName) {
  const audi = new Audio(`sounds/${soundName}.mp3`);
  audi.play();
}

/**
 * @param shortName {string}
 */
function playSoundByShortName(shortName) {
  const soundName = getElementNameByShortName(shortName);
  if (soundName === null) {
    return;
  }

  paySoundByName(soundName);
}

/**
 * @param shortName {string}
 * @return {?HTMLElement}
 */
function getElementByShortName(shortName) {
  const elements = document.getElementsByClassName(shortName);

  if (elements.length !== 1) {
    return null;
  }

  return elements[0];
}
