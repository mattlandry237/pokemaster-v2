import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemaster</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Link href="/random-pokemon">
            <Button variant="contained" color="info">Random Pokemon</Button>
          </Link>
          <Button component={Link} href="/pokemon-type-guesser">Pokemon Guesser</Button>
          <Button>some other thing</Button>

        </div>
      </main>
    </>
  )
}
