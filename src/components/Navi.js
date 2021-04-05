import React, { useState, useEffect } from "react";
import { Link, useHistory  } from "react-router-dom";

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
      <ul className="navbar-nav my-2 my-lg-0 px-2">
        <li className="nav-item">
          <Link to="/" onClick={logout} className="nav-link">
            Log out
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/index" className="nav-link">
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
          <Link to="/login" className="nav-link">
            Log In
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );
  }
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
      </ul>
      {links}
    </nav>
  );
};
// };

export default Navi;
