import { Item } from "./data";
import styles from "./Input.module.css";
import React from "react";

interface IndicatorProps {
  item: Item;
  isOpen: boolean;
  openField: (item: Item) => void;
}

const Indicator: React.FC<IndicatorProps> = ({ item, isOpen, openField }) => {
  return (
    <div className={styles.indicator}>
      <img src={item.path} alt={item.title} className={styles.imgIndicator} />
      <p className={styles.textIndicator}>{item.title}</p>
      <button
        type="button"
        onClick={() => openField(item)}
        className={styles.iconIndicator}
      >
        {isOpen ? (
          <img src={item.up} alt="arrow up" width={20} />
        ) : (
          <img src={item.down} alt="arrow down" width={20} />
        )}
      </button>
    </div>
  );
};

export default Indicator;
