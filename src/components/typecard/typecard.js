import Image from 'next/image'
import styles from './typecard.module.css'
import Grid from '@mui/material/Grid'


const waterType = 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/water.svg'

const TypeCard = () => {
    return (
        <div className={styles.container}>
            <Image width={25} height={25} className={styles.typeImg} src={waterType}/>

            <div className={styles.typeNameContainer}>
                <h2 className={styles.typeNameText}>WATER</h2> 
            </div>

        </div>
    )
}


export default TypeCard