import { useState } from "react";
import { popupText } from "../../../constants";
import Popup from "../popup/Popup";
import styles from "./Header.module.css";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className={styles.header_wrapper}>
      <div className={styles.logo_wrapper}>
        <img src="/logo.svg" alt="" />
        <a href="https://baza-skill.com.ua/ua">https://baza-skill.com.ua</a>
      </div>
      <div className={styles.title_wrapper}>
        <img src="/icons/header_icon.svg" alt="" />
        <span className={styles.title}>
          Інтерактивний калькулятор ROI для порівняння найму Junior vs Middle
        </span>
        <div
          className={styles.hint}
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <img src="/icons/hint_icon.svg" alt="" />
          {showPopup && (
            <Popup
              text={popupText}
              position={{ right: "0", bottom: "-232px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
