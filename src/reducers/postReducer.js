const initialState = {
  posts: []
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const reducer = {
    LOADING_POSTS: {
      ...state
    },
    ADD_POST: {
      ...state,
      posts: state.posts.unshift(payload)
    },
    REMOVE_POST: {
      ...state
      // posts: index of remove post, return new array
    },
    EDIT_POST: {
      ...state
      //index of edited post and amend details
    }
  };

  return reducer[type] || state;
};
