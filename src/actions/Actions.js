import {
  LOADING_USER,
  LOGIN_USER,
  REGISTERING_USER,
  REGISTER_USER
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
      const userLoginFetch = await fetch(
        'http://localhost:3000/api/v1/users/login',
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(userObj)
        }
      );
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
    const userRegisterFetch = await fetch(
      'http://localhost:3000/api/v1/users/register',
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(userObj)
      }
    );
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

export const AuthenticateUser = () => (dispatch) => {
  return;
};
