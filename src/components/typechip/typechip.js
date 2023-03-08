import Image from 'next/image'
import styles from './typechip.module.css'

const TypeChip = ({ type, selected }) => {
    return (
        <Image className={selected ? styles.selectedType : styles.type } 
        width={150} height={30} src={`/types/${type}.png`} alt={`Type: ${type}`} />
    )
}

export default TypeChip;