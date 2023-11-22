import { useContext} from 'react';

import { Link } from 'react-router-dom';

import { DataContext } from '../../hooks/HookUseContext';

import { BsBagPlusFill } from "react-icons/bs";

import Card from '../Card/Card';

import styles from './Section.module.css';

const Section = () => {
	const { categories, itensCarrinho, setItensCarrinho } = useContext(DataContext);

	const { listaProdutos } = useContext(DataContext);

	const addItemCarrinho = (item) => {
		itensCarrinho.filter((itemAtual) => {

		})
		// if(!itensCarrinho.includes(item)){
		// 	setItensCarrinho([...itensCarrinho, {...item, qtd}])
		// }
	}

	return (
		<>
			{categories.length === 0
				?
				(
					<p>Carregando...</p>
				)
				:
				(categories.map((category) =>
					<section key={category} className={styles.section_container}
					>
						<div className={styles.section_title}>
							<h2>{category}</h2>
							<Link>Ver tudo</Link>
						</div>
						<div className={styles.produtos}>
							{listaProdutos.map((produto) =>
								produto.category === category
									?
									(
										<div className={styles.card_container}
											key={produto.id}
										>
											<Card
												url={`/produtos/${produto.id}/info`}
												produto={{ ...produto }}
											/>
											<button type="button"
												onClick={() => setItensCarrinho([...itensCarrinho, produto])}
											>
												<BsBagPlusFill />
											</button>
										</div>
									)
									:
									(
										null
									)
							)}
						</div>
					</section>
				))
			}
		</>
	)
}

export default Section;