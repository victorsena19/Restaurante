import Buscador from './buscador/buscador';
import Filtros from './filtros/filtros';
import Itens from './itens/itens';
import Ordenador from './ordenador/ordenador';
import React, { useState } from 'react';
import styles from './App.module.scss';
import styleTema from '../../styles/tema.module.scss';


function App() {
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState('');
    return (
        <>
            <section>
                <h3 className={styleTema.titulo}>Cadápio</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
            </section>
        </>
    );
}

export default App;
