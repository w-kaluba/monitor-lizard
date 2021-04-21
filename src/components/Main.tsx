import Header from "./header/Header";
import SymbolList from "./symbol_list/SymbolList";
import Dashboard from "./dashboard/Dashboard";
import React from "react";
import styles from "./Main.module.scss";

class Main extends React.Component {
    render() {
        return (
            <>
                <Header title="monitor lizard." />
                <div className={styles.main}>
                    <SymbolList />
                    <Dashboard />
                </div>
            </>
        )
    }
}

export default Main;