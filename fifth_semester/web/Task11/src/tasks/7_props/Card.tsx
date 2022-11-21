import React from 'react';
import IContact from './IContact';
import Avatar from './Avatar';

function Card({ name, url, phone, email }: IContact) {
  return (
    <div>
      <h2>{name}</h2>
      <Avatar url={url} />
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}

export default Card;
