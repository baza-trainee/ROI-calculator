import { useField } from "formik";
import styles from "./Input.module.css";

interface InputTextProps {
  name: string;
  type?: string;
}

export default function InputText({ ...props }: InputTextProps) {
  const [field] = useField(props);
  return (
    <div className={styles.wrapper}>
      <input {...field} {...props} className={styles.inputText} />
      {/* {meta.touched && meta.error ? meta.error : null} */}
    </div>
  );
}
