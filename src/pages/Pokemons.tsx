import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import CharmanderImage from '../assets/charmander.png'
import styles from './pokemons.module.css';

const Pokemons = () => {
	const [query, setQuery] = useState("");

	return (
		<>
			<Header query={query} setQuery={setQuery}/>
			<main>
				<nav>
					<Link to='/' className={styles.listItem} >
						<img 
							src={CharmanderImage} 
							className={styles.listItemIcon} 
							alt='charmander' 
						/>
						<div className={styles.listItemText} >
							<span>Charmander</span>
							<span>007</span>
						</div>
					</Link>
					<Link to='/' className={styles.listItem} >
						<img 
							src={CharmanderImage} 
							className={styles.listItemIcon} 
							alt='charmander' 
						/>
						<div className={styles.listItemText} >
							<span>Charmeleon</span>
							<span>008</span>
						</div>
					</Link>
					<Link to='/' className={styles.listItem} >
						<img 
							src={CharmanderImage} 
							className={styles.listItemIcon} 
							alt='charmander' 
						/>
						<div className={styles.listItemText} >
							<span>Charizard</span>
							<span>009</span>
						</div>
					</Link>
				</nav>
			</main>
			<Footer />
		</>
	);
};

export default Pokemons;