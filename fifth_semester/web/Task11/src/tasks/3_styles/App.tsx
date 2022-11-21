import React from 'react';

function App() {
  const lastName = 'Вася';
  const firstName = 'Пупкин';
  const luckyNumber = 10;

  const headerStyles: React.CSSProperties = {
    display: 'block',
    fontSize: '2em',
    margin: '0.67em 0',
    fontWeight: 'bold',
  };

  const luckyStyles: React.CSSProperties = {
    fontWeight: 'bold',
  };

  return (
    <div>
      <p style={headerStyles}>Привет {firstName} {lastName}!</p>

      <p>Твоё счастливое число это <span style={luckyStyles}>{luckyNumber}</span></p>
    </div>
  );
}

export default App;
