import React, { useState } from 'react';
import { useDebounce, useDebouncedCallback } from 'use-debounce';

export default function Input() {
  const [text, setText] = useState('Hello');
  const [value] = useDebounce(text, 1000);

  return (
    <div>
      <input
        data-testid="input1"
        defaultValue={'Hello'}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <p>Actual value: {text}</p>
      <p>Debounce value: {value}</p>
    </div>
  );
}
