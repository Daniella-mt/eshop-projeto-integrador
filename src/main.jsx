import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {HookUseContext} from './Contexts/HookUseContext';

import App from './App.jsx';

import PaginaPadrao from './components/PaginaPadrao/PaginaPadrao.jsx';
import Login from './routes/Login/Login.jsx';
import NovoProduto from './routes/NovoProduto/NovoProduto.jsx';
import Admin from './routes/Admin/Admin.jsx';
import Produto from './routes/Produto/Produto.jsx';
import AtualizarProduto from './routes/AtualizarProduto/AtualizarProduto.jsx';
import PaginaUsuario from './routes/PaginaUsuario/PaginaUsuario.jsx';
import ListaTodosProdutos from './routes/ListaTodosProdutos/ListaTodosProdutos.jsx';
import Cadastro from './routes/Cadastro/Cadastro.jsx';

import './index.css';

const router = createBrowserRouter([
	{
		element: <App/>,
		children: [
			{
				path: '/',
				element: <PaginaPadrao />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/cadastro',
				element: <Cadastro />
			},
			{
				path:'/novo-produto',
				element: <NovoProduto/>
			},
			{
				path:'/admin',
				element: <Admin/>
			},
			{
				path:'produtos/ALL/:id/info',
				element: <Produto/>
			},
			{
				path: '/produtos/ALL/edit-produto/:id',
				element: <AtualizarProduto/>
			},
			{
				path: '/usuario-logado',
				element: <PaginaUsuario/>
			},
			{
				path: '/produtos/ALL/:section',
				element: <ListaTodosProdutos/>
			}
		]
	}]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HookUseContext>
			<RouterProvider router={router} />
		</HookUseContext>
	</React.StrictMode>,
)
