import TypeCard from '../TypeCard'
import Image from 'next/image'
import styles from "./Pokemon.module.css";


import { typeData } from '../../utils/typeData.js'


const Pokemon = ({ pokemon, hidden }) => {

    const primaryTypeStyles = typeData.find(element => element.name == pokemon.primaryType)
    let secondaryTypeStyles = {};
    if (pokemon.secondaryType) {
        secondaryTypeStyles = typeData.find(element => element.name == pokemon.secondaryType)
    }

    return (
        // <div className={styles.container}>
        //     <Image width={300} height={300} src={pokemon.sprite} alt={`Pokemon Name: ${pokemon.name}`} />
        //     <div>
        //         <h1 className={styles.pokemonName}>{pokemon.name}</h1>
        //         <Image width={125} height={27.5} className={`${styles.typeImg} ${hidden ? styles.hidden : null}`} src={`/types/${pokemon.primaryType}.png`} alt={`Pokemon Type:${pokemon.primaryType}`}></Image>
        //         {pokemon.secondaryType && <Image width={125} height={27.5} className={`${styles.typeImg} ${hidden ? styles.hidden : null}`} src={`/types/${pokemon.secondaryType}.png`} alt={`Pokemon Type:${pokemon.secondaryType}`} />}
        //     </div>
        // </div>

        <div className={styles.container}>
            <div className={styles.pokemonNameContainer}>
                <h1 className={styles.pokemonName}>{pokemon.name}</h1>
            </div>
            <div className={styles.pokemonImgContainer}>
                <Image className={styles.pokemonImg} width={300} height={300} src={pokemon.sprite} alt={`Pokemon Name: ${pokemon.name}`} />
            </div>
            <div className={`${styles.typeContainer} ${hidden ? styles.hidden : null}`}>
                <TypeCard type={pokemon.primaryType} primaryColor={primaryTypeStyles.primaryColor} secondaryColor={primaryTypeStyles.secondaryColor} button={false}></TypeCard>
            </div>
            <div className={`${styles.typeContainer} ${hidden ? styles.hidden : null}`}>
                {pokemon.secondaryType ? <TypeCard type={pokemon.secondaryType} primaryColor={secondaryTypeStyles.primaryColor} secondaryColor={secondaryTypeStyles.secondaryColor} button={false}></TypeCard> : null}
            </div>
        </div>
    )

}

export default Pokemon