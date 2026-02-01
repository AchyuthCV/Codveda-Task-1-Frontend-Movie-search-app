import { useState } from 'react';

function Toggle() {
  const [showText, setShowText] = useState(true);

  return (
    <div style={{ marginBottom: '30px', padding: '20px', border: '2px solid green' }}>
      <button onClick={() => setShowText(!showText)}>
        {showText ? 'Hide' : 'Show'} Text
      </button>
      {showText && <p>This text can be toggled!</p>}
    </div>
  );
}

export default Toggle;