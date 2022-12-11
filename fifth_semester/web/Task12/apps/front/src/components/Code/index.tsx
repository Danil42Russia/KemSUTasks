import React from 'react';
import './index.css';

interface ICodeProps {
  text: any;
}

export const Code: React.FC<ICodeProps> = (props) => {
  const { text } = props;

  return (
    <div className="Code__block">
      <pre className="Code__code">
        {typeof text === 'object' ? JSON.stringify(text, null, 4) : ''}
      </pre>
    </div>
  );
};
