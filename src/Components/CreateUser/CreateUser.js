import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setUser, setUserPosts } from './../../redux/actions/users';

const CreateUser = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const addUserHandler = () => {
    const userData = {
      id: Date.now(),
      username: name,
      email: email,
      phone: phone,
    };

    const userDataPosts = {
      id: userData.id,
      posts: [],
    };

    dispatch(setUser(userData));
    dispatch(setUserPosts(userDataPosts));
    history.push('/');
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <h1 className='display-4'>Create User</h1>
        <div className='form-group'>
          <label>Name</label>
          <input
            type='text'
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength='15'
          />
        </div>
        <div className='form-group'>
          <label>Email address</label>
          <input
            type='email'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength='25'
          />
        </div>
        <div className='form-group'>
          <label>Phone</label>
          <input
            type='tel'
            className='form-control'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength='15'
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={addUserHandler}
          data-testid='submit-button'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateUser;
