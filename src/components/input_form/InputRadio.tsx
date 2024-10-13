import styles from "./Input.module.css";
import { useField } from "formik";

interface InputRadioProps {
  name: string;
  value: string;
  type: string;
  children: React.ReactNode;
}

export default function InputRadio({ children, ...props }: InputRadioProps) {
  const [field] = useField({ ...props, type: "radio" });
  return (
    <li className={styles.itemRadio}>
      <label htmlFor={props.name} className={styles.label}>
        <img src="/icons/point.svg" alt="icon point" className={styles.point} />
        {children}
      </label>
      <input {...field} {...props} className={styles.inputRadio} />
    </li>
  );
}
