import ArcheryIcon from "../icons/ArcheryIcon";
import ClipboardPencil from "../icons/ClipboardPencil";
import { Values } from "../input_form/InputForm";
import styles from "./OutputForm.module.css";

interface ResultFormProps {
  values: Values;
  total: number;
  yearSalary: number;
}

const ResultForm: React.FC<ResultFormProps> = ({
  values,
  total,
  yearSalary,
}) => {
  const today = new Date().toLocaleDateString("uk-UA");

  return (
    <div className={styles.output_form}>
      <div className={styles.item_wrapper}>
        <div className={styles.title_wrapper}>
          <ClipboardPencil />
          <h3>Звіт про результат</h3>
        </div>
        <p className={styles.qualification}>{values.level}</p>
      </div>
      <div className={styles.item_wrapper}>
        <p>Спеціалізація: </p>
        <p className={styles.value_wrapper}>{values.specialization}</p>
      </div>
      <div className={styles.item_wrapper}>
        <p>Рівень Hard Skills:</p>
        <p className={styles.value_wrapper}>{values.softSkills}</p>
      </div>
      <div className={styles.item_wrapper}>
        <p>Зарплата за рік ($):</p>
        <p className={styles.value_wrapper}>{yearSalary}</p>
      </div>
      <div className={styles.item_wrapper}>
        <p>Вартість адапації ($):</p>
        <p className={styles.value_wrapper}>{values.educationCost}</p>
      </div>
      <div className={styles.roi_wrapper}>
        <ArcheryIcon />
        <p className={styles.roi_title}>Загальна сума витрат за перший рік:</p>
      </div>
      <div className={styles.date_wrapper}>
        <p className={styles.value_wrapper}>{today}</p>
        <div className={styles.roi_value}>
          <p className={styles.title_wrapper}>{total} </p>
        </div>
      </div>
    </div>
  );
};

export default ResultForm;
