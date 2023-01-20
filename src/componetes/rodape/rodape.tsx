import styles from './rodape.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Rodape(){
    return(
        <footer className={styles.footer}>
            <Logo />
        </footer>

    );
}