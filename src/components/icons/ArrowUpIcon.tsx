import styles from "./Icon.module.css";

const ArrowUpIcon = () => {
  return (
    <svg
      width="28"
      height="24"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.arrow}
        d="M21.875 15L14 8.25L6.125 15"
        stroke="#FEFFFE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpIcon;
