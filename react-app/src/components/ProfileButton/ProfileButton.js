import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
// import profileButton from "./profileButton.png";
import { NavLink, useHistory } from "react-router-dom";
import "./ProfileButton.css";
import LogoutButton from "../auth/LogoutButton";



function ProfileButton({ user }) {
  // console.log("user in Profile Button", user);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  // const [showModal, setShowModal] = useState(false);
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
  };
  const goToCreateASpot = (e) => {
    e.preventDefault();
    // history.push("/spots/new");
  };
  return (
    <>
      <div onClick={openMenu} className="dropdown-menu">
        <img
          id="profile-avatar-dropdown"
          src={
            "https://img2.etsystatic.com/site-assets/images/global-nav/no-user-avatar.svg"
          }
          alt={"profile-button"}
        />
      </div>

      {showMenu && (
        <div className="dropdown-content">
          {/* <ul className="profile-dropdown">
            <li>Hi {user.username}</li>
            <li>{user.email}</li>
          </ul> */}
          {/* <div>Hi {user.username}</div> */}
          <div className="user-name-avatar">
            <img
              id="profile-avatar-dropdown"
              src={
                "https://img2.etsystatic.com/site-assets/images/global-nav/no-user-avatar.svg"
              }
              alt={"profile-button"}
            />
            <div>Current User's name</div>
          </div>

          <div
            className="purchases-and-reviews"
            onClick={() => history.push("/purchases-and-reviews")}
          >
            Purchases and reviews
          </div>
          {/* <div
            className="manage-your-listing"
            // onClick={() => history.push("")}
          ></div> */}
          <NavLink className="manage-your-listing" to="/listings">
            Manage Listing
          </NavLink>
          <div className="profile-log-out" onClick={logout}>
            <LogoutButton />
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
