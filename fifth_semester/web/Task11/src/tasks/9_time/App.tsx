import React, { useState } from 'react';

import './styles.css';

interface ITime {
  second: string;
  minutes: string;
  hour: string;
}

function App() {
  const [time, setTime] = useState<ITime>();
  const [tag, setTag] = useState('');

  setInterval(() => {
    const date = new Date();
    const [hour, minutes, second] = date.toLocaleTimeString('en-GB').split(':');

    setTime({
      'second': hour,
      'minutes': minutes,
      'hour': second,
    });

    setTag(() => {
      if (parseInt(second) % 2 === 0) {
        return '';
      }

      return 'out';
    });
  }, 500);

  return (
    <div className="container">
      <div id={'timer'}>
        <span>{time?.second ?? '00'}</span>
        <span className={`space ${tag}`}>:</span>
        <span>{time?.minutes ?? '00'}</span>
        <span className={`space ${tag}`}>:</span>
        <span>{time?.hour ?? '00'}</span>
      </div>
    </div>
  );
}

export default App;
