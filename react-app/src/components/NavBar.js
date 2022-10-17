
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import styles from './NavBar.module.css'
import { useSelector } from 'react-redux';
import LoginFormModal from "./LoginFormModal"
import ProfileButton from "./ProfileButton/ProfileButton"
const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='profile_dropdown'>
          <ProfileButton/>
        </div>
        <div>
          <LogoutButton />
        </div>
      </>
    )
  }
  else {
    sessionLinks = (
      <>
        {/* <NavLink to='/login' exact={true} activeClassName='active'>
          Login
        </NavLink> */}
        <div>
          <LoginFormModal/>
        </div>
        {/* <NavLink to='/sign-up' exact={true} activeClassName='active'>
          Sign Up
        </NavLink> */}
      </>
    )

  }


  return (
    <div className={styles.outer_nav}>
      <nav className={styles.nav_bar}>
          <div className={styles.nav_logo}>
            <NavLink className={styles.home_logo} to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </div>

          <div className={styles.nav_searchbar}>
Searchbar here
          </div>
          {sessionLinks}
          {/* <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink> */}
      </nav>
    </div>
  );
}

export default NavBar;
