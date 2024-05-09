import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
export default function Sidebar() {
  const [extend, setExtend] = useState(false);
  function handleExtend(){
    extend==true?setExtend(false) : setExtend(true)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={handleExtend} className="menu" src={assets.menu_icon} alt=""></img>
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extend ? <p>New Chat</p> : null}
        </div>
        {extend ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>what is react ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extend ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extend ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extend ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}
