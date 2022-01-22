// initialState
const initialState = {
  todo: [
    {
      id: 1,
      name: 'One',
    },
    {
      id: 2,
      name: 'Two',
    },
    {
      id: 3,
      name: 'Three',
    },
  ],
};

// Action Type
const ADD_TODO = 'todo/ADD_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';
const UPDATE_TODO = 'todo/UPDATE_TODO';

// Action Creator & Action

export const addTodo = todo => {
  return { type: ADD_TODO, payload: todo };
};

export const deleteTodo = todoId => {
  return { type: DELETE_TODO, payload: todoId };
};

export const updateTodo = todo => {
  return { type: UPDATE_TODO, payload: todo };
};

// Reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, title: action.text };
    case DELETE_TODO:
      break;
    case UPDATE_TODO:
      break;

    default:
      return state;
  }
}
