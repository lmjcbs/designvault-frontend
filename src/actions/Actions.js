import { LOADING_USER, LOGIN_USER } from './ActionTypes';

export const userLoginAction = (userObj) => ({
  type: LOGIN_USER,
  payload: userObj
});

export const loadingUserAction = () => ({
  type: LOADING_USER
});

export const userLoginFetchAction = (userObj) => async (dispatch) => {
  dispatch(loadingUserAction());
  try {
    const response = await fetch(
      'http://localhost:3000/api/v1/users/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(userObj)
      }
    );
    const user = await response.json();
    dispatch(userLoginAction(user));
  } catch (error) {
    throw error;
  }
};
