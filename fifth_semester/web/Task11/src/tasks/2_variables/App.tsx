import React from 'react';

function App() {
  const lastName = 'Вася';
  const firstName = 'Пупкин';
  const luckyNumber = 10;

  return (
    <div>
      <h1>Привет {firstName} {lastName}!</h1>

      <p>Твоё счастливое число это {luckyNumber}</p>
    </div>
  );
}

export default App;
