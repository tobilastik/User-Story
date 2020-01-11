import React from 'react';

const TextArea = props => (
  <div className="form-group">
    <label className="text">{props.title}</label>
    <textarea
      className="story-textArea"
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={props.handlechange}
      placeholder={props.placeholder}
    />
  </div>
);

export default TextArea;
