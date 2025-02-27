import React, { useState } from 'react';
import Button from './Button';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <Button text="Incrementar" onClick={() => setCount(count + 1)} />
    </div>
  );
};

export default Counter;
