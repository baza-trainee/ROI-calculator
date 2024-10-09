import { useValues } from "../../stores/useValuesStore";
import styles from "./OutputForm.module.css";

const OutputForm = () => {
  const { values } = useValues();

  const today = new Date().toLocaleDateString("uk-UA");

  return (
    <div className={styles.output_form}>
      <div className={styles.item_wrapper}>
        <div className={styles.title_wrapper}>
          <img src="/icons/clipboard-Pencil_icon.svg" alt="" />
          <h3>Звіт про результат ROI:</h3>
        </div>
        <p className={styles.qualification}>Junior</p>
      </div>
        <div className={styles.item_wrapper}>
          <p>Спеціалізація: </p>
          <p className={styles.value_wrapper}>{values.specialization}</p>
        </div>
        <div className={styles.item_wrapper}>
          <p>Місячна зарплата ($):</p>
          <p className={styles.value_wrapper}>{values.salary}</p>
        </div>
        <div className={styles.item_wrapper}>
          <p>Вартість навчання ($):</p>
          <p className={styles.value_wrapper}>{values.educationCost}</p>
        </div>
        <div className={styles.item_wrapper}>
          <p>Витрати на менторство ($):</p>
          <p className={styles.value_wrapper}>{values.mentorshipCost}</p>
        </div>
        <div className={styles.item_wrapper}>
          <p>Початкова продуктивність (%):</p>
          <p className={styles.value_wrapper}> {values.productivity}</p>
        </div>
        <div className={styles.item_wrapper}>
          <p>Час до досягнення повної продуктивності (роки):</p>
          <p className={styles.value_wrapper}>{values.fullProductivityYears}</p>
        </div>
        <div className={styles.item_wrapper}>
          <div className={styles.roi_wrapper}>
            <img src="/icons/Archery_icon.svg" alt="" />
            <p>ROI: </p>
          </div>
          <div className={styles.roi_value}>
            <p className={styles.title_wrapper}>Number  </p>
            <img src="/icons/Percent_icon.svg" alt="" />
          </div>
        </div>
        <div className={styles.date_button_wrapper}>
          <p className={styles.value_wrapper}>{today}</p>
          <button className={styles.button_renew}>Оновити</button>
        </div>
    </div>
  );
};

export default OutputForm;