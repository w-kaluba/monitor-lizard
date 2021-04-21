import styles from "./Dashboard.module.scss";
import "../../components/charts/Candlestick";
import Candlestick from "../../components/charts/Candlestick";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Candlestick />
    </div>
  );
};

export default Dashboard;
