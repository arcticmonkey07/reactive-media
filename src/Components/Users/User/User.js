import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ id, name, email, phone }) => {
  return (
    <div className='col'>
      <div className='card h-100'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          className='card-img-top'
          alt='...'
        ></img>
        <div className='card-body d-flex flex-column'>
          <Link className='card-title' to={'/user/' + id}>{name}</Link>
          <p className='card-text'>{email}</p>
          <p className='card-text'>{phone}</p>
          <Link className='btn btn-primary mt-auto' to={'/edit/' + id}>
            Edit
          </Link>
        </div>
      </div >
    </div>
  );
};

export default User;
