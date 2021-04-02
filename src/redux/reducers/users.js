import {
  SET_USERS,
  SET_STORAGE_USERS,
  SET_LOAD,
  SET_USER,
  SET_USER_POSTS,
  SET_STORAGE_POSTS,
  EDIT_USER,
} from '../types';
import initialPosts from '../initialPosts';

const initialState = {
  isLoaded: false,
  users: [],
  usersPosts: initialPosts,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoaded: false,
      };
    case SET_STORAGE_USERS:
      return {
        ...state,
        users: action.payload,
        isLoaded: false,
      };
    case SET_LOAD:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    case SET_USER_POSTS:
      return {
        ...state,
        usersPosts: state.usersPosts.concat(action.payload),
      };
    case SET_STORAGE_POSTS:
      return {
        ...state,
        usersPosts: action.payload
      };
    case EDIT_USER:
      const user = state.users.find((user) => {
        return user.id === action.payload.id;
      });
      user.username = action.payload.username;
      user.email = action.payload.email;
      user.phone = action.payload.phone;
      return state;
    default:
      return state;
  }
};

export default usersReducer;
