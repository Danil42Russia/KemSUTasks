import React from 'react';

function getTime(): String {
  const date = new Date();
  const currentTime = date.getHours();

  if (currentTime < 12) {
    return 'Доброе Утро';
  }

  if (currentTime < 18) {
    return 'Добрый День';
  }

  return 'Спокойной Ночи';
}

function App() {
  const time = getTime();

  return (
    <p>{time}</p>
  );
}

export default App;
