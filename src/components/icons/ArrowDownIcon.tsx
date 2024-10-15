import styles from "./Icon.module.css";

const ArrowDownIcon = () => {
  return (
    <svg viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
      <path
        className={styles.arrow}
        d="M1.25 1L8 7.75L14.75 1"
        stroke="#FEFFFE"
      />
    </svg>
  );
};

export default ArrowDownIcon;
