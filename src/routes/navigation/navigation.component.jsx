import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/auth" className="nav-link">
            Signin
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
