// initialState
const initialState = {
  title: '',
  list: [
    {
      type: 'subjective',
      title: '주관식 제목을 입력하세요',
    },
  ],
};

// Action Type
const CREATE = 'quiz/CREATE';
const CHANGE_MAIN_TITLE = 'quiz/CHANGE_MAIN_TITLE';
const DELETE = 'quiz/DELETE';
const RESET_TEXT = 'quiz/RESET_TEXT';
// const SAVE = 'quiz/SAVE';

// Action Creator & Action

export const changeTitle = text => {
  return { type: CHANGE_MAIN_TITLE, text };
};

export const createQuiz = () => {
  return { type: CREATE };
};

export const deleteQuiz = index => {
  return { type: DELETE, index };
};

export const resetText = text => {
  return { type: RESET_TEXT, text };
};

// export const saveQuiz = (payload, e) => {
//   return {
//     type: SAVE,
//     payload: localStorage.setItem('Quiz', e.target.getAttribute('name')),
//   };
// };

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MAIN_TITLE:
      return { ...state, title: action.text };

    case CREATE:
      const newQuiz = [
        ...state.list,
        {
          type: 'objective',
          title: '객관식 제목을 입력하세요',
          quizList: ['보기를 만들어 주세요 ^^'],
        },
      ];
      return { title: state.title, list: newQuiz };

    // case RESET_TEXT:
    //   let newText = [...state];
    //   newText = newText.filter((item, index) => index !== action.index);
    //   return { ...newText, title: '' };

    case DELETE:
      const deletedQuiz = state.list.filter(
        (item, index) => index !== action.index
      );
      return { ...state, list: deletedQuiz };
    default:
      return state;
  }
}
