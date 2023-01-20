import styles from './paginaPadrao.module.scss';
import styleTema from '../../styles/tema.module.scss';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao(){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da Massa
                </div>
            </header>
            <div className={styleTema.container}><Outlet/></div>
        </>
    );
} 