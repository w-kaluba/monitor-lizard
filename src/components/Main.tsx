import Header from "./header/Header";
import SymbolList from "./symbol_list/SymbolList";
import Dashboard from "./dashboard/Dashboard";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <SymbolList />
        <Dashboard />
      </div>
    </div>
  );
};

export default Main;
