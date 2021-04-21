import styles from "./AddButton.module.scss";

const AddButton = () => {
  console.log(styles);
  return (
    <button className={styles.title}>
      <span className={styles.title}>+ add a new symbol</span>
    </button>
  );
};

export default AddButton;
