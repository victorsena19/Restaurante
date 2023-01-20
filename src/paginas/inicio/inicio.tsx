import cardapio from '../../dados/cardapio.json';
import styles from './inicio.module.scss';
import styleTema from '../../styles/tema.module.scss';
import foto from '../../assets/nossaCasa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/prato';

export default function Inicio(){
    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.2 - Math.random()).splice(0,3);
    const navigate = useNavigate();

    const verDetalhes = (prato: Prato)=>{
        navigate(`/prato/${prato.id}`, {state:{cardapio}, replace: false});
    };
    return(
        <section>
            <h3 className={styleTema.titulo}>Recomendações da Cozinha</h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map((item) => (
                    <div key={item.id} className={styles.recomendado}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button onClick={()=> verDetalhes(item)} className={styles.recomendado__botao}> Ver mais</button>
                    </div>
                ))}
            </div>  
            <h3 className={styleTema.titulo}>Nossa Casa</h3>
            <div className={styles.nossaCasa}>
                <img src = {foto} alt='Casa Aluroni'/>
                <div className={styles.nossaCasa__endereco}>
                    Rua Vergueiro, 3185 <br/> Vila Mariana - SP
                </div>
            </div>
        </section>
    );
}