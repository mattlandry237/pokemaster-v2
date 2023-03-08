import Image from 'next/image'
import styles from './typechip.module.css'

const TypeChip = ({ type, selected, results, game }) => {
    return (
        <Image className={game 
            ? selected ? styles.selectedType 
                       : styles.type 
            : selected ? results ? styles.correctAnswer 
                                 : styles.wrongAnswer  
                       : styles.type } 
        width={150} height={30} src={`/types/${type}.png`} alt={`Type: ${type}`} />
    )
}

export default TypeChip;