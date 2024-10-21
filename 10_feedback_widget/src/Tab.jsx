import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceAngry,
  faFaceSmile,
  faFaceGrinHearts,
  faFaceTired,
  faFaceSadTear,
} from "@fortawesome/free-solid-svg-icons";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);


  return (
    <div className="tab-container">
      <div className="btn-container">
        <button className={`${activeTab===1 ? "active" : ""}`}
        onClick={()=>{
           setActiveTab(1)
        }}
        >Issue</button>
        <button className={`${activeTab===2 ? "active" : ""}`}
        onClick={()=>{
           setActiveTab(2)
        }}
        >Ratings</button>
        <button className={`${activeTab===3 ? "active" : ""}`}
        onClick={()=>{
            setActiveTab(3)
        }}
        >Ideas</button>
      </div>
      <div className="tab-holder">
        <div className={`tabs ${activeTab===1 ? "tab-active" : ""}`}>
          <h2>Your Issues</h2>
          <textarea name="" id="" placeholder="write your issues here"></textarea>
        </div>

        <div className={`tabs ${activeTab===2 ? "tab-active" : ""}`}>
          <h2>Rate Here</h2>
          <div className="emoji">
            <FontAwesomeIcon icon={faFaceAngry} />
            <FontAwesomeIcon icon={faFaceSadTear} />
            <FontAwesomeIcon icon={faFaceTired} />
            <FontAwesomeIcon icon={faFaceSmile} />
            <FontAwesomeIcon icon={faFaceGrinHearts} />
          </div>
        </div>

        <div className={`tabs ${activeTab===3 ? "tab-active" : ""}`}>
          <h2>Your Ideas</h2>
          <textarea name="" id="" placeholder="write your ideas here"></textarea>
        </div>
      </div>

      <button id="submit">Submit</button>
    </div>
  );
};

export default Tab;
