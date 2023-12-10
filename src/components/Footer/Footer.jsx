import styles from './Footer.module.css';

const Footer = () => {
	return (
		<>
			<div className={styles.container_footer}>
				<div>
					<div className={styles.footer_logo}>
						<h1>ClickCompras</h1>
					</div>
					<div className={styles.nav_footer}>
						<ul>
							<li>
								<span>Quem somos nós</span>
							</li>
							<li>
								<span>Política de privacidade</span>
							</li>
							<li>
								<span>Programa fidelidade</span>
							</li>
							<li>
								<span>Nossas lojas</span>
							</li>
							<li>
								<span>Quero ser franqueado</span>
							</li>
						</ul>
					</div>
				</div>

				<div className={styles.dev}>
					<h2>Desenvolvido por <span>Equipe Projeto Integrador</span></h2>
					<span>2023</span>
				</div>
			</div>
		</>
	)
}

export default Footer