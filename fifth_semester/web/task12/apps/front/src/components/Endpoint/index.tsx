import React, { MouseEventHandler } from 'react';
import './index.css';
import { IEndpoint } from '../../models';

interface IEndpointProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  isActive: boolean;
}

export const Endpoint: React.FC<IEndpointProps & IEndpoint> = (props) => {
  const { onClick, isActive, method, name } = props;

  return (
    <div className={`Endpoint__block ${isActive ? 'active' : null}`} onClick={onClick}>
      <div className="Endpoint__method">{method}</div>
      <div className="Endpoint__url">{name}</div>
    </div>
  );
};
