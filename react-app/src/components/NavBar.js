import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import styles from "./NavBar.module.css";
import { useSelector } from "react-redux";
import LoginFormModal from "./LoginFormModal";
import ProfileButton from "./ProfileButton/ProfileButton";

import logo from "../eatsy-logo/logo-no-background.png";



const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)
  const [searchQuery, setSearchQuery] = useState()
  const history = useHistory()
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className="profile_dropdown">
          <NavLink to="/cart" className="profile_dropdown">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </div>
        <div className="profile_dropdown">
          <ProfileButton />
        </div>

        {/* <div>
          <LogoutButton />
        </div> */}
      </>
    );
  } else {
    sessionLinks = (
      <>
        {/* <NavLink to='/login' exact={true} activeClassName='active'>
          Login
        </NavLink> */}
        <div>
          <LoginFormModal />
        </div>
        {/* <NavLink to='/sign-up' exact={true} activeClassName='active'>
          Sign Up
        </NavLink> */}
      </>
    );
  }
 function handleSearch(e){
  e.preventDefault()
  history.push(`/search?q=${searchQuery}`)
 }

  return (
    <div className={styles.outer_most}>
      <div className={styles.outer_nav}>
        <nav className={styles.nav_bar}>
          <div className={styles.nav_logo}>
            <NavLink
              className={styles.home_logo}
              to="/"
              exact={true}
              activeClassName="active"
            >
              <img
                className="eatsy-logo"
                src={logo}
                alt="eatsy-logo"
                width={"90px"}
                height={"50px"}
              ></img>
            </NavLink>
          </div>

          <div className={styles.nav_searchbar}>
            <form>
              <div className={styles.searchForm}>
                <input type="text" className={styles.searchField} value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}></input>
                <button type="submit" className={styles.submitButton} onClick={(e)=>{handleSearch(e)}}><i class="fa-solid fa-magnifying-glass"></i></button>
              </div>
            </form>
          </div>
          {sessionLinks}
          {/* <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink> */}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
