import React, { useState, useEffect } from "react";
import { Link, useHistory  } from "react-router-dom";
import rolo from '../data/images/rolo.png';
import navHeader from '../data/images/navHeader.png';

const Navi = ({
  user,
  setLogin,
  setUser,
}: {
  user: string,
  setLogin: Function,
  setUser: Function,
}) => {
  let links;

  const history = useHistory();

  const [auth, setAuth] = useState(null);

  const logout = (e) => {
    e.preventDefault();
    setLogin(false);
    setAuth(false);
    setUser(null);
    history.push("/");
  };

  useEffect(() => {}, [setAuth]);

  //have to show the logout button, redirect to main page
  if (user) {
    links = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" onClick={logout} className="nav-linkout">
            Log out
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/index" className="nav-linkind">
            Index
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Welcome {user}</Link>
        </li>
        <li>
          <Link to='/debug'>Debug</Link>
        </li>
      </ul>
    );
  } else {
    links = (
      <ul className="navbar-nav my-2 my-lg-0 px-2">
        <li className="nav-item">
          <Link to="/login" className="nav-linkin" >
            Log In
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-linkreg">
          Register
          </Link>
        </li>
      </ul>
    );
  }
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <ul className="navbar-nav mr-auto">
        <a className="navbar-brand" href="/">
          <div className="logo-image">
            <img src={rolo} id="rolo">
              
            </img>
          </div>
        </a>
       </ul>
       <ul className="navbar-nav mr-auto"></ul>
      {links}
    </nav>
  );
};
// };

export default Navi;
