import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
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
        <div className="cart_container">
          <NavLink to="/cart" className="cart_link">
            <i className="fa-solid fa-cart-shopping fa-2x"></i>
          </NavLink>
        </div>
        <div className="profile_dropdown">
          <ProfileButton />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div>
          <LoginFormModal />
        </div>
      </>
    );
  }
  function handleSearch(e) {
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
                width={"80px"}
                height={"40px"}
              ></img>
            </NavLink>
          </div>

          <div className={styles.nav_searchbar}>
            <div className={styles.searchForm}>
              <form className={styles.search_form_container}>
                <input
                  type="text"
                  className={styles.searchField}
                  value={searchQuery}
                  placeholder="Search for anything"
                  onChange={(e) => { setSearchQuery(e.target.value) }}>
                </input>
                <button
                  type="submit"
                  className={styles.submitButton}
                  onClick={(e) => { handleSearch(e) }}>
                  <i class="fa-solid fa-magnifying-glass fa-2x"></i>
                </button>
              </form>
            </div>
          </div>
          {sessionLinks}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
