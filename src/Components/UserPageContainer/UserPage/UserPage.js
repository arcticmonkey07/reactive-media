import React from 'react';
import { useHistory } from 'react-router-dom';

const EditUser = ({ user, userPosts }) => {
  let history = useHistory();

  const backHandler = () => {
    history.push('/');
  };

  return (
    <div>
      <button type='submit' className='btn btn-primary' onClick={backHandler}>
        Back
      </button>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{user.username}</h5>
          <p className='card-text'>{user.email}</p>
          <p className='card-text'>{user.phone}</p>
        </div>
      </div>

      <div className='card'>
        {userPosts.posts.map((post) => {
          return (
            <div className='jumbotron jumbotron-fluid' key={post.id}>
              <div className='container'>
                <p className='lead'>{post.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditUser;
