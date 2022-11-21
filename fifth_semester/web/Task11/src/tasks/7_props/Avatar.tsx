import React from 'react';
import IContact from './IContact';

function Avatar({ url }: Pick<IContact, 'url'>) {
  return (
    <img
      src={url}
      alt="avatar_img"
    />
  );
}

export default Avatar;
