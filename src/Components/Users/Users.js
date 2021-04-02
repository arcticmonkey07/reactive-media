import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, setLoaded, setStorageUsers, setStoragePosts } from '../../redux/actions/users';

import User from './User/User';

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const usersPosts = useSelector((state) => state.users.usersPosts);
  const isLoaded = useSelector((state) => state.users.isLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('users') && users.length === 0) {
      dispatch(setLoaded(true));

      let storageUsers = JSON.parse(localStorage.getItem('users'));
      dispatch(setStorageUsers(storageUsers));

      let storagePosts = JSON.parse(localStorage.getItem('usersPosts'));
      dispatch(setStoragePosts(storagePosts));
    } else {
      loadUsers();
    }
  }, [users, usersPosts]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('usersPosts', JSON.stringify(usersPosts));
  }, [users, usersPosts]);

  const loadUsers = async () => {
    if (users.length > 0) {
      return;
    } else {
      dispatch(setLoaded(true));
      await dispatch(fetchUsers());
    }
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <h1 className='display-4'>Users</h1>
        <div className='row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4'>
          {isLoaded ? (
            <div className='d-flex justify-content-center'>
              <div className='spinner-border' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            </div>
          ) : (
            users.map((user) => (
              <User
                key={user.id}
                id={user.id}
                name={user.username}
                email={user.email}
                phone={user.phone}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
