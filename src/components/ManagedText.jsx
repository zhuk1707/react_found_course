import React, {useState} from 'react';

const ManagedText = () => {
  const [inputValue, setInputValue] = useState('Some text')

  return (
    <div>
      <h1>{inputValue}</h1>

      {/*Двустороннее связывание / Two-way Binding*/}
      <input
        type="text"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
    </div>
  );
};

export default ManagedText;