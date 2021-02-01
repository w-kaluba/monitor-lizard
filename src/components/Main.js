import Header from "./header/Header";
import SymbolList from "./symbol_list/SymbolList";
import Dashboard from "./dashboard/Dashboard";
import React from "react";
import styles from "./Main.module.scss";

class Main extends React.Component {
    render() {
        return(
            <div className={styles.main}>
                <Header title="monitor lizard."/>
                <SymbolList />
                <Dashboard />
            </div>
        )
    }
}

export default Main;