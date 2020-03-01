const initialState = {
  currentUser: {},
  loading: false
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const reducer = {
    LOADING_USER: {
      ...state,
      currentUser: state.currentUser,
      loading: true
    },
    LOGIN_USER: {
      ...state,
      currentUser: payload,
      loading: false
    },
    LOGOUT_USER: {
      ...state,
      currentUser: {}
    }
  };

  return reducer[type] || state;
};
