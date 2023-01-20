import { Prato } from 'types/prato';
import styles from './tagsPrato.module.scss';

export default function TagsPrato({category, size, serving, price}: Prato){
    return(
        <div className={styles.tags}>
            <div className={`${styles.tags__tipo} ${styles[`tags__tipo__${category.label.toLowerCase()}`]}`}>{category.label}</div>
            <div className={styles.tags__porcao}>{size}g</div>
            <div className={styles.tags__qtdpessoas}>Serve {serving} pessoa{serving === 1 ? '' : 's'}</div>
            <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
        </div>
    );
}