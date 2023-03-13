import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import Link from 'next/link'
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"


export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemaster</title>
      </Head>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}>
            <h1 style={{textAlign: "center"}}>Pokemaster</h1>
          </Grid>
          <Grid container item sx={{mt: '20px'}} justifyContent="center" align="center">
            <Grid item xs={2}>
              <Button variant="contained" component={Link} href="/random-pokemon">Random Pokemon</Button>
            </Grid>

            <Grid item xs={2}>
              <Button variant="contained" component={Link} href="/pokemon-type-guesser">Pokemon Guesser</Button>
            </Grid>

            <Grid item xs={2}>
              <Button variant="contained" component={Link} href="/type-effectiveness">Type Effectiveness</Button>
            </Grid>
          </Grid>
          

        </Grid>
      </Container>
    </>
  )
}
