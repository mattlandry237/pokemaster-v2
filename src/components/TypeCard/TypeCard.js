import Image from 'next/image'
import styles from './TypeCard.module.css'

const TypeCard = ({ type, primaryColor, secondaryColor, highlight, button }) => {
    return (
        <div className={`${styles.container} ${styles[highlight]} ${button ? styles.glow : null}`} style={{ background: `-webkit-linear-gradient(-20deg, ${primaryColor} 30%, ${secondaryColor} 31%)` }}>
            <Image width={25} height={25} className={styles.typeImg} src={`/type-icons/${type}.svg`} alt={`Type: ${type}`} />

            <div className={styles.typeNameContainer} >
                <h3 className={styles.typeNameText}>{type}</h3>
            </div>

        </div>
    )
}


export default TypeCard