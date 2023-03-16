import TypeCard from '../TypeCard'
import Image from 'next/image'
import styles from "./Pokemon.module.css";
import Grid from '@mui/material/Grid'


import { typeData } from '../../utils/typeData.js'


const Pokemon = ({ pokemon, hidden }) => {

    const primaryTypeStyles = typeData.find(element => element.name == pokemon.primaryType)
    let secondaryTypeStyles = {};
    if (pokemon.secondaryType) {
        secondaryTypeStyles = typeData.find(element => element.name == pokemon.secondaryType)
    }

    return (
        <>
            {/* <div className={styles.container}>
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
            </div> */}

            <Grid container style={{
                // borderRadius: "10px",
                // backgroundColor: "rgba(255, 255, 255, 0.75)",
                // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                padding: "20px",
                minWidth: "744px",
                marginTop: "20px"
            }}>

                <Grid item container style={{
                    width: "100%",
                    background: "-webkit-linear-gradient(-30deg, black 90%, rgba(255, 255, 255, 0) 91%)"
                }}>

                    <h1 style={{
                        textTransform: "capitalize",
                        fontFamily: "Helvetica, sans-serif",
                        color: "white",
                        margin: "5px 0 5px 15px",
                        userSelect: "none"
                    }}>{pokemon.name}</h1>

                </Grid>

                <Grid item container style={{
                    maxWidth: "635px"
                }}>
                    <Grid item xs={6}>
                        <Image className={styles.pokemonImg} width={300} height={300} src={pokemon.sprite} alt={`Pokemon Name: ${pokemon.name}`} />
                    </Grid>

                    <Grid item container xs={6} justifyContent="space-between">
                        <Grid item className={`${hidden ? styles.hidden : null}`} style={{
                            marginTop: "20px"
                        }}>
                            <TypeCard type={pokemon.primaryType} primaryColor={primaryTypeStyles.primaryColor} secondaryColor={primaryTypeStyles.secondaryColor} button={false}></TypeCard>
                        </Grid>

                        <Grid item className={`${hidden ? styles.hidden : null}`} style={{
                            marginTop: "20px"
                        }}>
                            {pokemon.secondaryType ? <TypeCard type={pokemon.secondaryType} primaryColor={secondaryTypeStyles.primaryColor} secondaryColor={secondaryTypeStyles.secondaryColor} button={false}></TypeCard> : null}
                        </Grid>

                        <Grid item container alignItems="center" justifyContent="space-between" style={{
                            borderRadius: "10px",
                            backgroundColor: "rgba(255, 255, 255, 0.75)",
                            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                        }}>
                            <Grid item>
                                <TypeCard type={pokemon.primaryType} primaryColor={primaryTypeStyles.primaryColor} secondaryColor={primaryTypeStyles.secondaryColor} button={false}></TypeCard>

                            </Grid>

                            <Grid item>
                                {pokemon.secondaryType ? <TypeCard type={pokemon.secondaryType} primaryColor={secondaryTypeStyles.primaryColor} secondaryColor={secondaryTypeStyles.secondaryColor} button={false}></TypeCard> : null}

                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>

            </Grid>

        </>


    )

}

export default Pokemon