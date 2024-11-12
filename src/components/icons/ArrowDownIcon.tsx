import styles from "./Icon.module.css";

const ArrowDownIcon = () => {
  return (
    <svg
      className={styles.arrow}
      width="28"
      height="24"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.arrow}
        d="M6.125 9L14 15.75L21.875 9"
        stroke="#FEFFFE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
