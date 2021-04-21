import styles from "./Symbol.module.scss";

const Symbol = () => {
  return (
    <div className={styles.container}>
      <p className={styles.symbol}>$GME</p>
      <p className={styles.change}>+5000%</p>
    </div>
  );
};

export default Symbol;
