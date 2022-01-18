// initialState
const initialState = {
  list: [
    {
      type: 'detailedAddress',
      placeholder: '상세주소',
    },
    {
      type: 'companyName',
      placeholder: '회사',
    },
    {
      type: 'precautionsForDelivery',
      placeholder: '배송시 유의사항',
    },
  ],
};

// Action Type
const ADDRESS_TEXT = 'address/ADDRESS_TEXT';
const RESET_TEXT = 'quiz/RESET_TEXT';

// Action Creator & Action

export const changeInputText = text => {
  return { type: ADDRESS_TEXT, text };
};

export const resetInputValue = text => {
  return { type: ADDRESS_TEXT, text };
};

// Reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case ADDRESS_TEXT:
      return { ...state, title: action.text };
    case RESET_TEXT:
      return { ...state };
    default:
      return state;
  }
}
