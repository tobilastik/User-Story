import React from 'react';

const Dropdown = props => {
  return (
    <React.Fragment>
      <label for={props.name}> {props.title} </label>
      <select
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="complexity-form"
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map (option => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

export default Dropdown;
