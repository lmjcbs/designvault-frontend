import {
  LOADING_USER,
  LOGIN_USER,
  AUTHENTICATE_USER,
  LOGOUT_USER,
  REGISTERING_USER,
  REGISTER_USER,
  ADD_POST
} from './ActionTypes';

export const userLoginAction = (userObj) => ({
  type: LOGIN_USER,
  payload: userObj
});

export const loadingUserAction = () => ({
  type: LOADING_USER
});

export const userLoginFetchAction = (userObj) => {
  return async (dispatch) => {
    dispatch(loadingUserAction());
    try {
      const userLoginFetch = await fetch('http://localhost:3000/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(userObj)
      });
      const response = await userLoginFetch.json();
      if (response.errors) {
        console.log(response.errors);
      } else {
        dispatch(userLoginAction(response.data));
      }
    } catch (error) {
      throw error;
    }
  };
};

export const userRegisterAction = () => ({
  type: REGISTER_USER
});

export const userRegisteringAction = () => ({
  type: REGISTERING_USER
});

export const userRegisterFetchAction = (userObj) => async (dispatch) => {
  dispatch(userRegisterAction());
  try {
    const userRegisterFetch = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(userObj)
    });
    const response = await userRegisterFetch.json();
    if (response.errors) {
      console.log(response.errors);
    } else {
      dispatch(userRegisterAction());
      dispatch(userLoginAction(response.data));
    }
  } catch (error) {
    throw error;
  }
};

const authenticateUserAction = () => ({
  type: AUTHENTICATE_USER
});

export const authenticateUser = () => async (dispatch) => {
  dispatch(authenticateUserAction());
  try {
    const authenticateUserFetch = await fetch(
      'http://localhost:3000/authenticate',
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }
    );
    const response = await authenticateUserFetch.json();
    if (response.errors) {
      console.log(response.errors);
    } else {
      dispatch(userLoginAction(response.data));
    }
  } catch (errors) {
    throw errors;
  }
};

export const userLogoutAction = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  try {
    await fetch('http://localhost:3000/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
  } catch (errors) {
    throw errors;
  }
};

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post
});
