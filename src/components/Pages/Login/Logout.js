import React, { useContext } from 'react';
//import React, { useState, useEffect, useContext } from 'react';
import { UserDataContext } from '../../Global/UserDataContext';

const Logout = (props) => {
  const { logout } = useContext(UserDataContext);

  logout();
  props.history.push('/');

  return <div className="loader"></div>;
};

export default Logout;
