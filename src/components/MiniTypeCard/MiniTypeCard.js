import Image from 'next/image'
import styles from './MiniTypeCard.module.css'

import { typeData } from "../../utils/typeData.js"

const MiniTypeCard = ({ type }) => {

    const typeStyles = typeData.find(element => type == element.name)

    return (
        <div className={styles.typeImgContainer} style={{
            backgroundColor: `${typeStyles.primaryColor}`,
            userSelect: "none",
            webkitUserDrag: "none"
        }}>
            <Image width={25} height={25} className={styles.typeImg} src={`/type-icons/${type}.svg`} alt={`Type: ${type}`} />
        </div>


    )


}

export default MiniTypeCard