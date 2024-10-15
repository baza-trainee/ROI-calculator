import styles from "./Icon.module.css";

const ArrowUpIcon = () => {
  return (
    <svg viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
      <path
        className={styles.arrow}
        d="M14.75 8L8 1.25L1.25 8"
        stroke="#FEFFFE"
      />
    </svg>
  );
};

export default ArrowUpIcon;
