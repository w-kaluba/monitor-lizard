import styles from "./AddButton.module.scss"
function AddButton(props: Object) {
    return (
        <button className={styles.button}>
            + add a new symbol
        </button>
    )
}

export default AddButton;