import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import EditUser from './EditUser/EditUser';

const UsersEdit = () => {
  const users = useSelector((state) => state.users.users);
  const { id } = useParams();

  const userRender = () => {
    const user = users.find((user) => {
      return user.id === +id;
    });
    return user;
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <h1 className='display-4'>Edit User</h1>
        <EditUser user={userRender()} />
      </div>
    </div>
  );
};

export default UsersEdit;
