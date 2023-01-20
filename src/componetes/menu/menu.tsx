import { ReactComponent as Logo} from 'assets/logo.svg';
import styles from './menu.module.scss';
import {Link} from 'react-router-dom';
export default function Menu() {

    const rotas = [{
        label: 'Inicio',
        para: '/',
    },
    {
        label: 'Cardápio',
        para: 'cardapio'
    },
    {
        label: 'Sobre',
        para: 'sobre'
    }
    ];
    return (
        <nav className={styles.menu}>
            <Logo/>
            <ul className={styles.menu__list}>
                {rotas.map((rota, index)=> (
                    <li className={styles.menu__link} key={index}>
                        <Link to={rota.para}>{rota.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}