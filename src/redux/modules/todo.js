import { firestore } from '../../firebase';

// initialState

const initialState = {
  list: [
    { text: '치킨 먹기', completed: false },
    { text: '넷플릭스 보기', completed: false },
    { text: '여행 가기', completed: false },
  ],
};

// Action Type
const CREATE = 'todo/CREATE';
const DELETE = 'todo/DELETE';
const RESET = 'todo/RESET';

// Action Creator & Action

export const createList = text => {
  return { type: CREATE, text };
};

export const deleteList = index => {
  return { type: DELETE, index };
};

export const resetText = text => {
  return { type: RESET, text };
};

// Firebase에 업데이트
export const saveFB = () => {
  return function (dispatch, getState) {
    const quizList = getState().quiz.list;
    const quizDB = firestore.collection(getState().todo.text);
    quizList.forEach((item, index) => {
      if (item.type === 'objective') {
        quizDB
          .doc(`${index + 1}번`)
          .set({ type: item.type, text: item.text, List: item.List });
      } else {
        quizDB.doc(`${index + 1}번`).set({ type: item.type, text: item.text });
      }
    });
  };
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      const newQuiz = [...state.list, { text: action.text, completed: false }];
      return { list: newQuiz };

    case RESET:
      return { ...state, text: '' };

    case DELETE:
      const deletedList = state.list.filter(
        (item, index) => index !== action.index
      );
      return { ...state, list: deletedList };
    default:
      return state;
  }
}
