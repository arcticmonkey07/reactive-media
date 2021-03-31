import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { editUser } from './../../../redux/actions/users';

const EditUser = ({ user }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const changeUserHandler = () => {
    const userData = {
      id: user.id,
      username: username,
      email: email,
      phone: phone,
    };

    dispatch(editUser(userData));
    history.push('/');
  };

  return (
    <div>
      <div className='form-group'>
        <label>Name</label>
        <input
          type='text'
          className='form-control'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          maxLength='15'
        />
      </div>
      <div className='form-group'>
        <label>Email address</label>
        <input
          type='email'
          className='form-control'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          maxLength='25'
        />
      </div>
      <div className='form-group'>
        <label>Phone</label>
        <input
          type='tel'
          className='form-control'
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          maxLength='15'
        />
      </div>
      <button
        type='submit'
        className='btn btn-primary'
        onClick={changeUserHandler}
      >
        Change
      </button>
    </div>
  );
};

export default EditUser;
