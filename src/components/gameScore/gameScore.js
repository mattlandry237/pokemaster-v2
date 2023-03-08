

const GameScore = ({ currentRound, score }) => {
    return (
        <>
            <h1>{`Round: ${currentRound}`}</h1>
            <h1>{`Score: ${score}`}</h1>
        </>

    )
}

export default GameScore