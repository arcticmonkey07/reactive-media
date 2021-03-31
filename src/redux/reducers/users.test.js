import usersReducer from './users';
import { setUser } from '../actions/users';

let state = { users: [] };

it('new user should be added', () => {
  let action = setUser('Peter');
  let newState = usersReducer(state, action);

  expect(newState.users.length).toBe(1);
});

it('username should be correct', () => {
  let action = setUser('Peter');
  let newState = usersReducer(state, action);

  expect(newState.users[0]).toBe('Peter');
});