import Menu from 'componetes/menu/menu';
import PaginaPadrao from 'componetes/paginaPadrao/paginaPadrao';
import Rodape from 'componetes/rodape/rodape';
import App from 'paginas/cardapio/App';
import Inicio from 'paginas/inicio/inicio';
import NotFound from 'paginas/notFound/notFound';
import Prato from 'paginas/prato/prato';
import Sobre from 'paginas/sobre/sobre';
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom';

export default function Rotas(){
    return(
        <main className='container'>
            <Router>
                <Menu/>            
                <Routes>
                    <Route path='/' element={<PaginaPadrao/>}>
                        <Route index element={<Inicio/>}/>
                        <Route path='cardapio' element={<App/>}/>
                        <Route path='sobre' element={<Sobre/>}/>
                    </Route>
                    <Route path='prato/:id' element={<Prato/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
                <Rodape/>
            </Router>
        </main>
    );
}