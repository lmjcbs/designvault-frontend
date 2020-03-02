const initialState = {
  loading: false
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const reducer = {
    REGISTERING_USER: {
      ...state,
      userInfo: payload,
      loading: true
    },
    REGISTER_USER: {
      ...state,
      loading: false
    }
  };

  return reducer[type] || state;
};
