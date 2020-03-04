const initialState = {
  currentUser: {},
  loading: false,
  isAuthenticated: false
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
      loading: false,
      isAuthenticated: true
    },
    LOGOUT_USER: {
      initialState
    },
    AUTHENTICATE_USER: {
      initialState
    }
  };

  return reducer[type] || state;
};
