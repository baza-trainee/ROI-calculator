import { Item } from "./data";
import styles from "./Input.module.css";
import React, { useState } from "react";
import Popup from "../common/popup/Popup";

interface InfoProps {
  item: Item;
}

const InfoField: React.FC<InfoProps> = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div
      className={styles.infoIndicator}
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <img src={item.info} alt="icon info" />
      {showPopup && (
        <Popup text={item.text} position={{ top: "40px", right: "16px" }} />
      )}
    </div>
  );
};

export default InfoField;
