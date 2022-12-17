import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value)}
      style={{
        padding: '6px 8px',
        borderRadius: '10px',
        backgroundColor: '#eee',
        color: 'grey',
        border: '1px solid grey',
        marginRight: 20
      }}
    >
      <option disabled value="">{defaultValue}</option>

      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}

    </select>

  );
};

export default MySelect;