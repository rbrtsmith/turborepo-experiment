import * as React from 'react';

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button style={{ background: 'teal' }}>{children}</button>;
};
