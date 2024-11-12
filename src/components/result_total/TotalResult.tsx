import { useEffect, useState } from "react";
import { useJunior, useMiddle } from "../../stores/useValuesStore";
import MenthorIcon from "../icons/MenthorIcon";
import styles from "./Total.module.css";

export default function TotalResult() {
  const juniorState = useJunior();
  const middleState = useMiddle();
  const totalJunior = juniorState.total;
  const totalMiddle = middleState.total;
  const [economy, setEconomy] = useState(0);
  const result = totalMiddle > totalJunior;
  useEffect(() => {
    if (totalJunior === 0 || totalMiddle === 0) return;
    setEconomy(totalMiddle - totalJunior);
  }, [totalJunior, totalMiddle]);
  return (
    <div className={styles.wrap_total}>
      <div className={styles.item_wrapper}>
        <div className={styles.title_wrapper}>
          <MenthorIcon />
          <h3>Ви отримаєте економію ($)</h3>
        </div>
        <p className={styles.economy}>{Math.abs(economy)}</p>
      </div>
      <div className={styles.item_wrapper}>
        <p>якщо приймете на роботу</p>
        {economy === 0 ? (
          ""
        ) : (
          <div>
            {result ? (
              <p className={styles.roi_title}>Junior-спеціаліста</p>
            ) : (
              <p className={styles.roi_title}>Middle-спеціаліста</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
