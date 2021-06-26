import React from "react";
import { ReactComponent as FeedIcon } from "./assets/icons/feedicon.svg";
import { ReactComponent as SavedIcon } from "./assets/icons/savedicon.svg";
import { ReactComponent as NotificationIcon } from "./assets/icons/notificationicon.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import paths from "paths";


export default (props) => {
  return (
    <div className="Header">
      <div className="Header__Nav">
        <div className="Header__Nav--left">Madhyam</div>
        <div></div>
        <div className="Header__Nav--right">
          <ul>
            <li>
              <Link to={paths.home}>
                <FeedIcon className="icon" />
                <p>Feed</p>
              </Link>
            </li>
            <li>
              <Link to={paths.about}>
                <SavedIcon className="icon" /> <p>Saved</p>
              </Link>
            </li>
            <li>
              <Link to={paths.about}>
                <NotificationIcon className="icon" />
                <p>Notification</p>
              </Link>
            </li>
            <li>
              <Link to={paths.about}>
                <img
                  src="https://cdn.britannica.com/38/130638-050-DBCE19EE/Kate-Winslet-2009.jpg"
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  );
};
