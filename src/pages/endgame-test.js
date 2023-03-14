import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import Pokemon from '../components/Pokemon'
import Container from '@mui/material/Container'



const Test = () => {
    const router = useRouter();
    const data = JSON.parse(router.query.results);
    console.log(data)
    return (
        <>
            {/* {data.map((result) => {
                <>
                    <h1>{result.pokemon.name}</h1>
                    <Pokemon pokemon={result.pokemon}></Pokemon>
                </>
            })} */}
            <Container maxWidth="xl">
                {data.map((x) =>
                    // <h1 key={x.pokemon.name}>{x.pokemon.name}</h1>
                    <Pokemon pokemon={x.pokemon}></Pokemon>
                )}

            </Container>

            <Button href="/" variant="contained" color="primary">Home </Button>
        </>

    )
}

export default Test;