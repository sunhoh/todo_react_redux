import React, { useState } from 'react';
import styled from 'styled-components';
import { addTodo } from '../redux/modules/todo';

const AddTodoForm = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button
          type="submit"
          onClick={() =>
            addTodo({
              id: 34,
              name: value,
            })
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddTodoForm;
