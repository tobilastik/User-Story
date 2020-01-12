import React from 'react';

export default function Banner({children, title}) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      {children}
    </div>
  );
}
