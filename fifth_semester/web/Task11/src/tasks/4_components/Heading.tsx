import React from 'react';

function Heading() {
  const styles: React.CSSProperties = {
    display: 'block',
    fontSize: '2em',
    margin: '0.67em 0',
    fontWeight: 'bold',
  };

  return (
    <p style={styles}>Моя любимая еда</p>
  );
}

export default Heading;
