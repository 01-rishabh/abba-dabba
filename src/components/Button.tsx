import * as React  from 'react';
import { ReactNode } from 'react';

type PropsType = {
  children : ReactNode;
};

const Button = ({children} : PropsType) => {
  return (

    <button
    style={{
      backgroundColor: '#ff6600',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    }}
  >
    {children}
  </button>
  );
};



export { Button};
