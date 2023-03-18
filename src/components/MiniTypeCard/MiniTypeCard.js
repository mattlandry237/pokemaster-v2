import Image from 'next/image'
import styles from './MiniTypeCard.module.css'

import { typeData } from "@/utils/typeData.js"

{/* the wh prop is width and height combined since the MiniTypeCard is required to have the same dimensions*/ }
const MiniTypeCard = ({ type, wh = 25 }) => {
    const typeStyles = typeData.find(element => type == element.name)

    return (
        <div className={styles.typeImgContainer} style={{
            backgroundColor: `${typeStyles.primaryColor}`,
            userSelect: "none",
            webkitUserDrag: "none",
            height: `${wh}px`
        }}>
            <Image width={wh} height={wh} className={styles.typeImg} src={`/type-icons/${type}.svg`} alt={`Type: ${type}`} />
        </div>
    )
}

export default MiniTypeCard