import { SET_USERS, SET_USER, SET_USER_POSTS, EDIT_USER } from '../types';
import initialPosts from '../initialPosts';

let savedState, getUsers, getPosts, setLoaded;

if (localStorage.getItem('users')) {
  setLoaded = true;
  savedState = JSON.parse(localStorage.getItem('users'));
  getPosts = savedState.usersPosts;
  getUsers = savedState.users;
  setLoaded = false;
} else {
  getUsers = [];
  getPosts = initialPosts;
  setLoaded = true;
}

const updateStorage = state => {
  localStorage.setItem('users', JSON.stringify(state));
};

const initialState = {
  isLoaded: setLoaded,
  users: getUsers,
  usersPosts: getPosts
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      state.users = action.users;
      state.isLoaded = false;
      updateStorage(state);
      return state;
    case SET_USER:
      state.users = state.users.concat(action.payload);
      updateStorage(state);
      return state;
    case SET_USER_POSTS:
      state.usersPosts = state.usersPosts.concat(action.payload)
      updateStorage(state);
      return state;
    case EDIT_USER:
      const user = state.users.find((user) => {
        return user.id === action.payload.id;
      });
      user.username = action.payload.username;
      user.email = action.payload.email;
      user.phone = action.payload.phone;
      updateStorage(state);
      return state;
    default:
      return state;
  }
};

export default usersReducer;
