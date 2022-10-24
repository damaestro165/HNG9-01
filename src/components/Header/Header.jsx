import React from "react";
import "./Header.scss";
import shareDesktop from "../../assets/shareDesktop.png";
import ProfileImg from "../../assets/images/profileImage.jpg";

function Header() {
  return (
    <header className="profile-section">
      <div className="shareIcon">
        <img src={shareDesktop} alt="shareIcon" />
      </div>
      <div>
        <img src={ProfileImg} alt="Profile_Image" id="profile_img" />
      </div>
      <div className="username">
        <p id="twitter">@yomi_dev</p>
        <p id="slack">Abayomi</p>
      </div>
    </header>
  );
}

export default Header;
