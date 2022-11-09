import React from 'react';

const Child = ({ color, changeColor }) => {
  return (
    <>
      <div>자식 컴포넌트입니당ㅎㅎㅎ.</div>
      <p color={color} />
      <button onClick={changeColor}>색상바꾸기</button>
    </>
  );
};

export default Child;
