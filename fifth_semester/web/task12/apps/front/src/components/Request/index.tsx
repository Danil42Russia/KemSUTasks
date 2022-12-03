import React from 'react';
import './index.css';
import normalizeUrl from 'normalize-url';

interface IRequestProps {
  baseURL: string;
  url: string;
}

export const Request: React.FC<IRequestProps> = (props) => {
  const { baseURL, url } = props;

  return (
    <div className="Request__block">
      <p className="Request__title">Request</p>
      <a target="_blank" href={normalizeUrl(`${baseURL}/${url}`)} className="Request__url" rel="noreferrer">{url}</a>
    </div>
  );
};
