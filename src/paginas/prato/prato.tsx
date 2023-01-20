import styles from './prato.module.scss';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import cardapio from '../../dados/cardapio.json';
import TagsPrato from 'componetes/tagsPrato/tagsPrato';
import NotFound from 'paginas/notFound/notFound';
import PaginaPadrao from 'componetes/paginaPadrao/paginaPadrao';

export default function Prato() {

    const navigate = useNavigate();
    const { id } = useParams();
    const prato = cardapio.find(item => item.id === Number(id));
    if (!prato) {
        return <NotFound />;
    }
    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <>
                        <button onClick={() => navigate(-1)} className={styles.voltar}>
                            {'<Voltar'}
                        </button>
                        <section className={styles.container}>
                            <h1 className={styles.titulo}> {prato.title}</h1>
                            <div className={styles.imagem}>
                                <img src={prato.photo} alt={prato.title} />
                            </div>
                            <div className={styles.conteudo}>
                                <p className={styles.conteudo__recomendado}>{prato.description}</p>
                                <TagsPrato {...prato} />
                            </div>
                        </section>
                    </>
                } />
            </Route>
        </Routes>
    );
}