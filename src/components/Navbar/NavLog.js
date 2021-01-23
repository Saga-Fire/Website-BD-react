import React, { useContext } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import { Search } from 'react-bootstrap-icons';
import { UserDataContext } from '../Global/UserDataContext';
import { useHistory } from 'react-router-dom';

const NavLog = () => {
  const { userData } = useContext(UserDataContext);
  const history = useHistory();

  return !userData.auth ? (
    <NavDropdown
      title={<span className="far fa-user"></span>}
      id="dropdown-item-button"
    >
      <NavDropdown.Item
        as="button"
        onClick={() => {
          history.push('/signup');
        }}
      >
        Inscription
      </NavDropdown.Item>
      <NavDropdown.Item
        as="button"
        onClick={() => {
          history.push('/login');
        }}
      >
        Connexion
      </NavDropdown.Item>
    </NavDropdown>
  ) : (
    <NavDropdown
      title={<span className="fas fa-user">{' ' + userData.name}</span>}
      id="dropdown-item-button"
    >
      <NavDropdown.Item
        as="button"
        onClick={() => {
          history.push('/getprofil');
        }}
      >
        Profil
      </NavDropdown.Item>
      <NavDropdown.Item
        as="button"
        onClick={() => {
          history.push('/update');
        }}
      >
        Modifier profil
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item
        as="button"
        onClick={() => {
          history.push('/logout');
        }}
      >
        Déconnexion
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default NavLog;
