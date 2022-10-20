import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
// import profileButton from "./profileButton.png";
import { NavLink, useHistory } from "react-router-dom";
import "./ProfileButton.css";
import LogoutButton from "../auth/LogoutButton";



function ProfileButton() {
  // console.log("user in Profile Button", user);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
const currentUser = useSelector(state =>state.session.user)
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

const goToListing = (e)=>{
   e.preventDefault();
   history.push('/listings')
}
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
            <div className="current-user-name">{currentUser.username}</div>
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
          <div className="manage-your-listing" onClick={e=>goToListing(e)}>
            Manage Listing
          </div>
          <div className="profile-log-out" onClick={logout}>
            <LogoutButton />
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
