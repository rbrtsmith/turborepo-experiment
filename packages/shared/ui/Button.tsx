import * as React from 'react';

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button style={{ background: 'red' }}>{children}</button>;
};

const foo = (x: any) => x;
