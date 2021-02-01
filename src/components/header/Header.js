import styles from "./Header.module.scss"
import "../../index.scss"
function Header(props) {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{props.title}</h1>
        </header>
    )
}

export default Header;