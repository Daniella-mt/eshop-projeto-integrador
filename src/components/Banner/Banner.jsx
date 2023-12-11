import { Link } from 'react-router-dom';

import CarouselBanner from '../CarouselBanner/CarouselBanner';

import styles from './Banner.module.css';

const Banner = () => {
	// const background = {
	// 	backgroundImage: `url(${Banner})`,
	// };

	return (
		<div
			className={styles.banner_container}
		>
			<CarouselBanner/>
		</div>
	)
}

export default Banner