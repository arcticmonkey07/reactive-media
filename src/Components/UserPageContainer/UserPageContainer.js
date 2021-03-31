import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import UserPage from './UserPage/UserPage';

const UserPageContainer = () => {
  const users = useSelector((state) => state.users.users);
  const usersPosts = useSelector((state) => state.users.usersPosts);
  const { id } = useParams();

  const userRender = () => {
    const user = users.find((user) => {
      return user.id === +id;
    });
    return user;
  };

  const usersPostsRender = () => {
    const posts = usersPosts.find((posts) => {
      return posts.id === +id
    });
    return posts;
  }

  return (
    <div className='card'>
      <div className='card-body'>
        <h1 className='display-4'>User</h1>
        <UserPage user={userRender()} userPosts={usersPostsRender()} />
      </div>
    </div>
  );
};

export default UserPageContainer;
