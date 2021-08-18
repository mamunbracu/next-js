import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
import Head from 'next/head'
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  console.log(ninjas)

  return (
    <>
     <Head>
      <title>Ninja List | All Ninjas</title>
      <meta name="keywords" content="Ninjas, meta, pipe" />
    </Head>
    <div className={styles.container}>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      ))}
    </div>
    </>
  );
}
 
export default Ninjas;