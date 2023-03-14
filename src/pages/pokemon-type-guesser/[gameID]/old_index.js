import { useRouter } from 'next/router'


const TestComp = () => {

    const router = useRouter();
    const game = router.query.gameID

    return (
        <>
            <h1>{game}</h1>

        </>
    )
}


export default TestComp