export const TOGGLE_MODAL = 'modal/TOGGLE_MODAL';

const initialState = {
  showModal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return {
        ...state,
        showModal: action.payload
      };
    }
    default:
      return state;
  }
};
