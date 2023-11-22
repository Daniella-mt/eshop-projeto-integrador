import { Link } from 'react-router-dom';

import banner from '/img/black-friday-banner.jpg';

import styles from './Banner.module.css';

const Banner = () => {
	const background = {
		background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${banner})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover'
	};
	
	return (
		<div className={styles.banner_container} style={background}>

		</div>
	)
}

export default Banner