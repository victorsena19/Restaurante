import React, { useEffect, useState } from 'react';
import Item from './item/item';
import cardapio from '../../../dados/cardapio.json';
import styles from './itens.module.scss';
import { Cardapio } from 'types/prato';

interface Props{
    busca: string
    filtro: number | null
    ordenador: string
}

export default function Itens({busca, filtro, ordenador}: Props){
    const [ lista, SetLista] = useState(cardapio);

    //Inicio
    function testaBusca(title: string){
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }
    //Fim

    //Inicio
    function testaFiltro(id: number){
        if(filtro!== null) return filtro === id;
        return true;
    }
    //Fim

    function ordenar(novaLista: Cardapio){
        switch(ordenador){
        case 'porcao':
            return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
        case 'qtd_pessoas':
            return novaLista.sort((a,b) => a.serving > b.serving ? 1 : -1);
        case 'preco':
            return novaLista.sort((a,b) => a.price > b.price ? 1 : -1);
        default: 
            return novaLista;
        }
    }

    useEffect(() => {
        const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
        SetLista(ordenar(novaLista));
    }, [busca, filtro, ordenador]);
    return(
        <div className={styles.itens}>
            {lista.map(item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    );
}