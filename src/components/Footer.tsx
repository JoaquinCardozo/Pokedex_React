import styles from './footer.module.css';
import { Link } from 'react-router-dom';
import PokeballPic from '../assets/pokeball.png';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Link to="/pokemons" className={styles.footerLink}>
				<img className={styles.footerIcon} src={PokeballPic} alt="Pokeball" />
				Pokemons
			</Link>
		</footer>
	);
};

export default Footer;