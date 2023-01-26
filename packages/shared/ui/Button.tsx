import * as React from 'react';

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button style={{ background: 'blue' }}>{children}</button>;
};
