import { Fragment, useContext } from "react";
import AuthContext from "store/context/auth-context";
import classes from "./index.module.css";

const Header = () => {
  const { isLoggedIn, onLogout } = useContext(AuthContext);
  return (
    <header className={classes.header}>
      <nav className={classes.inner_header}>
        <div className={classes.logo_container}>
          <h1>
            TO<span>DO LIST</span>
          </h1>
        </div>
        <ul className={classes.navigation}>
          {isLoggedIn && (
            <Fragment>
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/" onClick={onLogout}>
                <li>Logout</li>
              </a>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
