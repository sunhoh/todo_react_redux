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

// export const loadDB = data => {
//   return { type: LOAD, data };
// };

// Firestore에서 collection을 가져옴
const db = firestore.collection('product');

// Firebase에서 데이터를 가져오는 부분 (LOAD)
export const loadFB = () => {
  // 함수를 반환하는 미들웨어 부분

  return function (dispatch) {
    db.get().then(docs => {
      // Firestore에서 가져온 데이터를 저장할 변수
      let data = [];
      // "product" 콜렉션의 모든 문서에서 데이터와 id를 가져옴!
      docs.forEach(doc => {
        if (doc.exists) {
          data = [...data, { id: doc.id, ...doc.data() }];
        }
      });

      // firestore에서 가져온 데이터를 action에 넣어서 dispatch 해준다!
      // 리덕스 모듈에서 action을 dispatch 해주므로 컴포넌트에서는 firestore와
      // 통신하는 함수를 불러주면 된다!
      dispatch(loadBucket(data));
    });
  };
};

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
