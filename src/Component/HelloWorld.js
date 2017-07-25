import React from 'react';

const HelloWorld = ({text, player}) => (
  <div>
    <h1>{text}</h1>
    <h1>{player}</h1>
  </div>
);

export default HelloWorld;