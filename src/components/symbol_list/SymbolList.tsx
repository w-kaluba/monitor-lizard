import styles from "./SymbolList.module.scss";
import Symbol from "./Symbol";
import AddButton from "./AddButton";

function SymbolList(props: Object) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Your open positions.
            </h2>
            <Symbol />
            <Symbol />
            <Symbol />
            <Symbol />
            <Symbol />
            <AddButton />
        </div>
    )
}

export default SymbolList;