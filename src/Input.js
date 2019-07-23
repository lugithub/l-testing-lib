import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';

jest.useFakeTimers();

export default function Input() {
  const [text, setText] = useState('Hello');
  const [value] = useDebounce(text, 100);

  return (
    <div>
      <input
        data-testid="username-input"
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
