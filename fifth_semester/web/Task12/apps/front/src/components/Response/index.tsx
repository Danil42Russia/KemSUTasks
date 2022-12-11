import React from 'react';
import './index.css';

interface IResponseProps {
  responseCode: number;
}

export const Response: React.FC<IResponseProps> = (props) => {
  const { responseCode } = props;

  const isOk = 200 <= responseCode && responseCode < 300;

  return (
    <div className="Response__block">
      <p className="Response__title">Response</p>
      <p className={`Response__code ${isOk ? null : 'bad'}`}>{responseCode}</p>
    </div>
  );
};
