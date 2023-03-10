import Image from 'next/image'
import styles from './typecard.module.css'

const TypeCard = ({ type, primaryColor, secondaryColor, highlight }) => {
    return (
        <div className={`${styles.container} ${styles.glow} ${styles[highlight]}`} style={{ background: `-webkit-linear-gradient(-20deg, ${primaryColor} 30%, ${secondaryColor} 31%)` }}>
            <Image width={25} height={25} className={ styles.typeImg } src={`/type-icons/${type}.svg`}/>

            <div className={styles.typeNameContainer} >
                <h3 className={styles.typeNameText}>{type}</h3> 
            </div>

        </div>
    )
}


export default TypeCard