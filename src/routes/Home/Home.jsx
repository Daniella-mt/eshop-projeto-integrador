import styles from './Home.module.css';

import Banner from '../../components/Banner/Banner.jsx';
import Section from '../../components/Section/Section.jsx';

const Home = () => {
	return (
		<div className={styles.home_container}>
			<Banner />
			<Section />
		</div>
	)
}

export default Home;