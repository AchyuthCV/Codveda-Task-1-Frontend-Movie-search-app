import { useState } from 'react';
import Button from './Button';
import Card from './Card';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Card title="Counter" style={{ border: '2px solid blue' }}>
      <h2>Count: {count}</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button onClick={() => setCount(count + 1)} variant="primary">
          Increment
        </Button>
        <Button onClick={() => setCount(count - 1)} variant="danger">
          Decrement
        </Button>
        <Button onClick={() => setCount(0)} variant="secondary">
          Reset
        </Button>
      </div>
    </Card>
  );
}

export default Counter;