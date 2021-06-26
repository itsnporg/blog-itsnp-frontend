import React from "react";
import "./Notification.scss";
import { ReactComponent as NotificationBellIcon } from "../../assets/icons/notificationbell.svg";
import {NotificationData} from "./NotificationData";

export const Notification = () => {
  return (
    <div>
      <div className="notification_container">
        <div className="arrow_head_container">
          <div className="arrow_head"></div>
        </div>
        <div className="notification_titles">
          <p>Notification</p>
          <div className="icon">
            <NotificationBellIcon className="icon" />
          </div>
        </div>
        {NotificationData.map((item) => {
          return (
            <div className="notifications">
              <div className="profile">
                <img
                  src={item.profileimg}
                  alt=""
                />
              </div>
              <div className="notification_value">
               {item.notification}
              </div>
            </div>
          );
        })}


        <div className="dateline">
          <span>From</span>
          <p> 18/05/2021</p>
        </div>


        {NotificationData.map((item) => {
          return (
            <div className="notifications">
              <div className="profile">
                <img
                  src={item.profileimg}
                  alt=""
                />
              </div>
              <div className="notification_value">
               {item.notification}
              </div>
            </div>
          );
        })}
        <div className="notifications">
          <div className="profile">
            <img
              src="https://cdn.britannica.com/38/130638-050-DBCE19EE/Kate-Winslet-2009.jpg"
              alt=""
            />
          </div>
          <div className="notification_value">
            this is notification Lorem ipsum dolor sit amet consectetur
            adipisicing elit.accusantium ipsam.
          </div>
        </div>

        <div className="notifications">
          <div className="profile">
            <img
              src="https://cdn.britannica.com/38/130638-050-DBCE19EE/Kate-Winslet-2009.jpg"
              alt=""
            />
          </div>
          <div className="notification_value">
            this is notification Lorem ipsum dolor sit amet consectetur
            adipisicing elit.accusantium ipsam.
          </div>
        </div>

     
      </div>
    </div>
  );
};
