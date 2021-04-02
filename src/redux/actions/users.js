import { SET_USERS, SET_STORAGE_USERS, SET_LOAD, SET_USER, SET_USER_POSTS, SET_STORAGE_POSTS, EDIT_USER } from '../types';

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

      const data = await response.json();
      const loadedUsers = data;

      dispatch({ type: SET_USERS, payload: loadedUsers });
    } catch (err) {
      throw err;
    }
  };
};

export const setStorageUsers = users => {
  return {
    type: SET_STORAGE_USERS,
    payload: users
  }
}

export const setLoaded = state => {
  return {
    type: SET_LOAD,
    payload: state,
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

export const setStoragePosts = (storagePosts) => {
  return {
    type: SET_STORAGE_POSTS,
    payload: storagePosts,
  };
};


export const editUser = (userData) => {
  return {
    type: EDIT_USER,
    payload: userData,
  };
};
