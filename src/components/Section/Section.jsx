import { useContext, useEffect, useState } from 'react';

import { Link } from "react-router-dom";

import { DataContext } from '../../Contexts/HookUseContext';

import { BsBagPlusFill } from "react-icons/bs";

import CardItem from "../Card/Card";

import Card from 'react-bootstrap/Card';

import Placeholder from 'react-bootstrap/Placeholder';

import styles from "./Section.module.css";

const Section = () => {
	const { itensCarrinho, setItensCarrinho } = useContext(DataContext);

	const [sectionList, setSectionList] = useState([]);

	const { listaProdutos } = useContext(DataContext);


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
					<Card style={{ width: '12rem' }}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Placeholder as={Card.Title} animation="glow">
								<Placeholder xs={6} />
							</Placeholder>
							<Placeholder as={Card.Text} animation="glow">
								<Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
								<Placeholder xs={6} /> <Placeholder xs={8} />
							</Placeholder>
							<Placeholder.Button variant="primary" xs={6} />
						</Card.Body>
					</Card>
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

										<CardItem
											key={produto.id}
											url={`/produtos/ALL/${produto.id}/info`}
											produto={{ ...produto }}
										/>
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
