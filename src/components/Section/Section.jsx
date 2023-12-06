import { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { DataContext } from '../../hooks/HookUseContext';

import { BsBagPlusFill } from "react-icons/bs";

import Card from '../Card/Card';

import styles from './Section.module.css';

const Section = () => {
	const { itensCarrinho, setItensCarrinho } = useContext(DataContext);

	const [sectionList, setSectionList] = useState([]);

	const { listaProdutos } = useContext(DataContext);

	// const addItemCarrinho = (item) => {
	// 	itensCarrinho.filter((itemAtual) => {

	// 	})
	// 	if(!itensCarrinho.includes(item)){
	// 		setItensCarrinho([...itensCarrinho, {...item, qtd}])
	// 	}
	// }

	useEffect(() => {
		const categories = listaProdutos.map((produto) =>
			produto.section
		);

		const filteredCategories = categories.filter((category, index, array) =>
			array.indexOf(category) === index
		)
		setSectionList(filteredCategories);
	}, [listaProdutos]);

	return (
		<>
			{listaProdutos.length === 0
				?
				(
					<p>Carregando...</p>
				)
				:
				(sectionList.map((section) =>
					<section key={section} className={styles.section_container}
					>
						<div className={styles.section_title}>
							<h2>{section}</h2>
							<Link to={`produtos/ALL/${section}`}>Ver tudo</Link>
						</div>
						<div className={styles.produtos}>
							{listaProdutos.map((produto) =>
								produto.section === section
									?
									(
										<div className={styles.card_container}
											key={produto.id}
										>
											<Card
												url={`/produtos/ALL/${produto.id}/info`}
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