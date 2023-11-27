import styles from './Footer.module.css';


const Footer = () => {
	return (
		<>
			<div className={styles.container_footer}>
				<div className={styles.footer_logo}>
						<img src={''} alt="Logo footer" />
						<img src={''} alt="Logo " />
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
						<li>
							<span>Anuncie aqui</span>
						</li>
					</ul>
				</div>
				<div className={styles.contato_form}>
					<form>
						<div>
							<label htmlFor="name">
								Nome:
								<input type="text" name="name" id="name" />
							</label>
						</div>
						<div>
							<label htmlFor="mesage">
								Escreva sua mensagem:
								<textarea name="mesage" id="mesage">
								</textarea>
							</label>
						</div>
						<input type="submit" value="Enviar mensagem" />
					</form>
				</div>

			</div>
			<div className={styles.dev}>
				<h2>Desenvolvido por <span>Equipe Projeto Integrador</span></h2>
				<span>2023</span>
			</div>
		</>
	)
}

export default Footer