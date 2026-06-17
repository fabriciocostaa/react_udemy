import styles from './styles.module.css'

export function Foote() {
    return (<>
    <footer className={styles.footer}>
        <a href="../pages/AboutPomodoro/index.tsx ">Entenda como funciona a técnica pomodoro</a>
    </footer>
        <br/>
    <footer className={styles.footer}>
        <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()} - feito com 💚</a>
    </footer>
    </>);
}
