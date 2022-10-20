import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { NavLink, useHistory } from "react-router-dom";
import "./ProfileButton.css";
import LogoutButton from "../auth/LogoutButton";



function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);

  const userState = useSelector(state => state.session.user)

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("")
  };

  const userIcon = <i class="fa-solid fa-user fa-2x"></i>
  const userIconMenu = <i class="fa-solid fa-user"></i>

  return (
    <>
      <div onClick={openMenu} className="dropdown-menu">
        <div className="dropdown-menu-avatar">
          {userIcon}
        </div>
      </div>

      {showMenu && (
        <div className="dropdown-content">
          {/* <ul className="profile-dropdown">
            <li>Hi {user.username}</li>
            <li>{user.email}</li>
          </ul> */}
          {/* <div>Hi {user.username}</div> */}
          <div className="user-name-avatar">
            {userIconMenu}
            <div className="Username-dropdown">{userState.username}</div>
          </div>

          <div
            className="purchases-and-reviews"
            onClick={() => history.push("/purchases-and-reviews")}
          >
            Purchases and reviews
          </div>
          <div
            className="manage-your-listing"
            onClick={() => history.push("/listings")}
          >
            Manage Listings
          </div>
          {/* <NavLink className="manage-your-listing" to="/listings">
            Manage Listing
          </NavLink> */}
          <div className="profile-log-out" onClick={logout}>
            <LogoutButton />
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
