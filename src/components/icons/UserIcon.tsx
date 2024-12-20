import styles from "./Icon.module.css";
const UserIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.icon}
        d="M11.5 0C5.159 0 0 5.159 0 11.5C0 17.841 5.159 23 11.5 23C17.841 23 23 17.841 23 11.5C23 5.159 17.841 0 11.5 0ZM11.5 3C13.43 3 15 4.57 15 6.5C15 8.43 13.43 10 11.5 10C9.57 10 8 8.43 8 6.5C8 4.57 9.57 3 11.5 3ZM17.5 18H5.5C5.224 18 5 17.776 5 17.5C5 13.916 7.916 11 11.5 11C15.084 11 18 13.916 18 17.5C18 17.776 17.776 18 17.5 18Z"
        fill="#4DC760"
      />
    </svg>
  );
};

export default UserIcon;
