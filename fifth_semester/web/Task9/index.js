document.addEventListener('DOMContentLoaded', main);
document.addEventListener('keydown', keyDown);

function main() {
  const drums = document.getElementsByClassName('drum');
  for (let i = 0; i < drums.length; i++) {
    const drumElement = drums[i];
    drumElement.addEventListener('click', drumClick);
  }
}

/**
 * @param event {KeyboardEvent}
 */
function keyDown(event) {
  const keyName = event.key;
  playSoundByShortName(keyName);
}

/**
 * @param event {PointerEvent}
 */
function drumClick(event) {
  const drumElement = event.target;
  playSoundByShortName(drumElement.innerText);
}

/**
 * @param shortName {String}
 * @return {?String}
 */
function getElementNameByShortName(shortName) {
  switch (shortName) {
    case 'w':
      return 'tom-1';

    case 'a':
      return 'tom-2';

    case 's':
      return 'tom-3';

    case 'd':
      return 'tom-4';

    case 'j':
      return 'snare';

    case 'k':
      return 'crash';

    case 'l':
      return 'kick';

    default:
      return null;
  }
}

/**
 * @param soundName {String}
 */
function paySoundByName(soundName) {
  const audi = new Audio(`sounds/${soundName}.mp3`);
  audi.play();
}

/**
 * @param shortName {String}
 */
function playSoundByShortName(shortName) {
  const soundName = getElementNameByShortName(shortName);
  if (soundName === null) {
    return;
  }

  paySoundByName(soundName);
}
