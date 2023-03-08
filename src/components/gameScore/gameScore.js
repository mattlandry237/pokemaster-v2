import styles from './gameScore.module.css'

const GameScore = ({ currentRound, score }) => {
    return (
        <div className={styles.gameScoreCard}>
            <h1 className={styles.text}>{`Round: ${currentRound}`}</h1>
            <h1 className={styles.text}>{`Score: ${score}`}</h1>
        </div>

    )
}

export default GameScore