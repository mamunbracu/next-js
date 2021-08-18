import Head from "next/head";
import styles from "../styles/About.module.css";
const About = () => {
	return (
		<>
			<Head>
				<title>Ninja List | About</title>
				<meta name="keywords" content="Ninjas, meta, pipe" />
			</Head>
			<div className={styles.container}>
				<h1 className={styles.heading}>About pages</h1>
				<p className={styles.para}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
					dolorem hic pariatur asperiores tempore ipsa reprehenderit rerum id
					voluptatum illum, quam molestiae qui sed cum adipisci repellat placeat
					libero, nulla dignissimos minus ea nam ipsam mollitia? Mollitia
					obcaecati voluptatem libero cupiditate recusandae consequatur
					inventore molestiae ex? Magnam incidunt quaerat ipsum!
				</p>
			</div>
		</>
	);
};

export default About;
