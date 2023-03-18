import Image from 'next/image'
import Grid from '@mui/material/Grid'
import TypeCard from '../TypeCard'

import { typeData } from '@/utils/typeData.js'


const Pokemon = ({ pokemon, currentRound, gameLength, score, hidden }) => {

    const primaryTypeStyles = typeData.find(element => element.name == pokemon.primaryType)
    let secondaryTypeStyles = {};
    if (pokemon.secondaryType) {
        secondaryTypeStyles = typeData.find(element => element.name == pokemon.secondaryType)
    }

    return (
        <Grid item container style={{
            padding: "20px 0px 20px 0px"
        }}>

            <Grid item container alignItems="center" justifyContent="space-between" style={{
                width: "100%",
                background: "-webkit-linear-gradient(-30deg, black 97%, rgba(255, 255, 255, 0) 91%)"
            }}>
                <Grid item xs={8}>
                    <h1 style={{
                        textTransform: "capitalize",
                        fontFamily: "Helvetica, sans-serif",
                        color: "white",
                        margin: "5px 0 5px 15px",
                        userSelect: "none"
                    }}>{pokemon.name}</h1>
                </Grid>

                {currentRound ?
                    <>
                        <Grid item xs={2} style={{
                            textAlign: "center"
                        }}>
                            <h3 style={{
                                color: "white",
                                fontFamily: "Helvetica, sans-serif",
                                margin: "0px"
                            }}>Round: {currentRound}/{gameLength}</h3>
                        </Grid>

                        <Grid item xs={2} style={{
                            textAlign: "center"
                        }}>
                            <h3 style={{
                                color: "white",
                                fontFamily: "Helvetica, sans-serif",
                                margin: "0px"
                            }}>Score: {score}</h3>
                        </Grid>
                    </>
                    :
                    null
                }
            </Grid>

            <Grid item container style={{
                maxWidth: "635px"
            }}>
                <Grid item xs={6}>
                    <Image style={{
                        userSelect: "none",
                        webkitUserDrag: "none"
                    }} width={300} height={300} src={pokemon.sprite} alt={`Pokemon Name: ${pokemon.name}`} />
                </Grid>

                <Grid item container xs={6} justifyContent="space-between">

                    <Grid item style={{
                        marginTop: "20px",
                        visibility: `${hidden ? "hidden" : "visible"}`
                    }}>
                        <TypeCard type={pokemon.primaryType} primaryColor={primaryTypeStyles.primaryColor} secondaryColor={primaryTypeStyles.secondaryColor} button={false}></TypeCard>
                    </Grid>

                    <Grid item style={{
                        marginTop: "20px",
                        visibility: `${hidden ? "hidden" : "visible"}`
                    }}>
                        {pokemon.secondaryType ? <TypeCard type={pokemon.secondaryType} primaryColor={secondaryTypeStyles.primaryColor} secondaryColor={secondaryTypeStyles.secondaryColor} button={false}></TypeCard> : null}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Pokemon