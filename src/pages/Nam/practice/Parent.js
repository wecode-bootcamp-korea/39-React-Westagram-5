import React, { useState } from 'react';
import Child from './Child';
const Parent = () => {
  const [color, setColor] = useState('red');
  const changeColor = () => {
    setColor('blue');
  };

  return (
    <>
      <h1 style={{ backgroundColor: color }}>
        동물의 왕국에서 제일 쎈 동물은?
      </h1>
      <input
        onChange={() => setColor('blue')}
        placeholder="아무거나 써보시오"
      />
      <Child color={color} changeColor={changeColor} />
      <br />
      <label>
        {' '}
        Allow drinks?
        <input id="allow-drinks" type="checkbox" />
      </label>

      <label for="drink-select">Drink selection:</label>
      <select id="drink-select">
        <option value="1">Water</option>
        <option value="2">Beer</option>
        <option value="3">Pepsi</option>
        <option value="4">Whisky</option>
      </select>
    </>
  );
};

export default Parent;
