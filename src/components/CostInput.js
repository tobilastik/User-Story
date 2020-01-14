import React from 'react';

const Input = props => {
  //console.log(props.value);
  return (
    <div>
      <label htmlFor={props.name}>
        {props.title}

      </label>

      <input
        className="story-input"
        id={props.name}
        name={props.name}
        type={props.inputtype}
        value={props.value}
        onChange={props.handlechange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
