import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/actions/users';

import User from './User/User';

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    loadUsers();
    setIsLoading(false);
  }, []);

  const loadUsers = async () => {
    if (users.length > 0) {
      return;
    } else {
      await dispatch(fetchUsers());
    }
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <h1 className='display-4'>Users</h1>
        <div className='row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4'>
          {isLoading ? (
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
