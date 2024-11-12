import { Item } from "./data";
import InfoField from "./InfoField";
import styles from "./Input.module.css";

interface IndicatorProps {
  item: Item;
}

const Indicator: React.FC<IndicatorProps> = ({ item }) => {
  return (
    <div className={styles.indicator}>
      <div className={styles.imgIndicator}>
        <item.icon />
      </div>
      <p className={styles.textIndicator}>{item.title}</p>
      <InfoField item={item} />
    </div>
  );
};

export default Indicator;
