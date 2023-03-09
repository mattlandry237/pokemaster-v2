import Image from 'next/image'
import styles from './typechip.module.css'

const TypeChip = ({ type, highlight }) => {
    return (
        // <Image className={selected ? styles.selectedType : styles.type } 
        // width={150} height={30} src={`/types/${type}.png`} alt={`Type: ${type}`} />
        <Image className={ styles[highlight] } 
        width={150} height={30} src={`/types/${type}.png`} alt={`Type: ${type}`} />
    )
}

export default TypeChip;