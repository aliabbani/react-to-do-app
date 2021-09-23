import React, { useState } from 'react';
import propTypes from 'prop-types';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: (e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="button" className="input-submit">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: propTypes.func.isRequired,
};

export default InputTodo;
