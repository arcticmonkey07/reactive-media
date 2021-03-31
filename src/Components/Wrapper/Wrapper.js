import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Users from '../Users/Users';
import EditUser from '../EditUserContainer/EditUserContainer';
import CreateUser from '../CreateUser/CreateUser';
import UserPageContainer from '../UserPageContainer/UserPageContainer';

const Wrapper = () => {
  return (
    <div className='container'>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>
        <Route path='/create'>
          <CreateUser />
        </Route>
        <Route path='/edit/:id'>
          <EditUser />
        </Route>
        <Route path='/user/:id'>
          <UserPageContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default Wrapper;
