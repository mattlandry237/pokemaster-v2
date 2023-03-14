import Image from 'next/image'
import styles from './MiniTypeCard.module.css'

const MiniTypeCard = ({ type, primaryColor, w, h }) => {

    // const test = typeData[0].name
    return (
        <div className={styles.typeImgContainer} style={{ backgroundColor: `${primaryColor}` }}>
            <Image width={25} height={25} className={styles.typeImg} src={`/type-icons/${type}.svg`} alt={`Type: ${type}`} />
        </div>


    )


}

export default MiniTypeCard