import styles from "./pokemon.module.css";
import Image from 'next/image'
import { capitalizeFirstLetter } from "../../utils/helpers";

export default function Pokemon({ pokemon, hidden }) {

    return (
        <div className={styles.container}>
            <div className={styles.itemImage}>
                <Image width={300} height={300} src={pokemon.sprite} alt={`Pokemon Name: ${pokemon.name}`}/>
            </div>

            <div className={styles.itemInfo}>
                <h1 className={styles.pokemonName}>{capitalizeFirstLetter(pokemon.name)}</h1>
                <Image width={125} height={27.5} className={ `${styles.typeImg} ${hidden ? styles.hidden : null}` } src={`/types/${pokemon.primaryType}.png`} alt={`Pokemon Type:${pokemon.primaryType}`}></Image>
                {pokemon.secondaryType && <Image width={125} height={27.5} className={ `${styles.typeImg} ${hidden ? styles.hidden : null}` } src={`/types/${pokemon.secondaryType}.png`} alt={`Pokemon Type:${pokemon.secondaryType}`} />}
            </div>
        </div>
    )

}