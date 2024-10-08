import styles from "./Popup.module.css";

interface PopupProps {
  text: string;
  position: Record<string, string>;
}

const Popup = ({ text, position }: PopupProps) => {
  return (
    <div className={styles.popup_wrapper} style={{ ...position }}>
      {text}
    </div>
  );
};

export default Popup;
