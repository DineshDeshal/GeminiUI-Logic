import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello,Dinesh</span>
          </p>
          <p>How Can I help you today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>watch the beauty of the world using technology</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Describe the concept of popullation </p>
            <img src={assets.mic_icon} alt="" />
          </div>
          <div className="card">
            <p>How india is a great country🥰</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>what you think about Artificial technology</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a Prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <div>
            <div className="bottom-info">
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy and Gemini Apps
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
