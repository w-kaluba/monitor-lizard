import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Monitor Lizard.</h1>
    </header>
  );
};

export default Header;
