import { Item } from "./data";
import styles from "./Input.module.css";
import React, { useState } from "react";
import Popup from "../common/popup/Popup";
import InfoIcon from "../icons/InfoIcon";

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
      <InfoIcon />
      {showPopup && (
        <Popup
          text={item.text}
          position={{ top: "40px", right: "16px", zIndex: "1" }}
        />
      )}
    </div>
  );
};

export default InfoField;
