import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";

const logo = require("../../assets/YouTube-Logo.png");

function Header() {
  return (
    <div className="header">
      <div class="header__left">
        <MenuIcon />
        <img className="header__logo" src={logo} alt="" />
      </div>

      <div class="header__input">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header__inputButton" />
      </div>

      <div class="header__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar src={require("../../assets/avatar.jpg")} />
      </div>
    </div>
  );
}

export default Header;
