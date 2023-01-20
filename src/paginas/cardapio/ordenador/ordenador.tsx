import React, {useState} from 'react';
import styles from './ordenador.module.scss';
import opcoes from './opcoes.json';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';

interface Props{
    ordenador: string
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ordenador, setOrdenador}: Props){
    
    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
    
    return(
        <button 
            onBlur={() => setAberto(false)}
            onClick={() => setAberto(!aberto)}
            className={`${styles.ordenador} 
                ${ordenador !== '' ? styles['ordenador--ativo'] : ''}`}>
            <span>{nomeOrdenador||'Ordenar por'}</span>
            {aberto ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}
            <div
                className={`${styles.ordenador__options}
                ${aberto === true ? styles['ordenador__options--ativo']: false }`}>
                {opcoes.map((opcao) => (
                    <div className={styles.ordenador__option}
                        onClick={() => setOrdenador(opcao.value)}
                        key={opcao.value}>
                        {opcao.nome}
                    </div>))}
            </div>
        </button>
    );
}