import { SET_USERS, SET_USER, SET_USER_POSTS, EDIT_USER } from '../types';

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

      const data = await response.json();
      const loadedUsers = data;

      dispatch({ type: SET_USERS, users: loadedUsers });
    } catch (err) {
      throw err;
    }
  };
};

export const setUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData,
  };
};

export const setUserPosts = (userData) => {
  return {
    type: SET_USER_POSTS,
    payload: userData,
  };
};

export const editUser = (userData) => {
  return {
    type: EDIT_USER,
    payload: userData,
  };
};
