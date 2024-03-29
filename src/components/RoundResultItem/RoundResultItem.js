import Grid from '@mui/material/Grid'
import Image from 'next/image'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MiniTypeCard from '../MiniTypeCard'
import styles from './RoundResultItem.module.css'

const RoundResultItem = ({ pokemon, selectedTypes, roundNum }) => {
    let points = 0;

    const checkAnswer = (pokemonType, selectedTypes) => {
        if (selectedTypes && selectedTypes.includes(pokemonType)) {
            points += 1;
            return true
        }

        return false
    }

    return (
        <>
            <Grid container justifyContent="space-between" style={{
                background: "rgba(255, 255, 255, 0.42)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                marginBottom: "10px",
                width: "250px",
                userSelect: "none",
                webkitUserDrag: "none"
            }}>
                <Grid item container xs={4} style={{
                    display: "flex",
                    justifyContent: "center",

                }}>
                    <Image width={90} height={90} src={pokemon.sprite} alt={`Pokemon Name: ${pokemon.name}`} style={{
                        paddingBottom: "5px",
                        webkitUserDrag: "none"
                    }} />
                </Grid>

                <Grid item container xs={5} columnSpacing={1} style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignSelf: "center"
                }}>

                    <Grid item style={{ textAlign: "center" }}>
                        <MiniTypeCard type={pokemon.primaryType}></MiniTypeCard>
                        {checkAnswer(pokemon.primaryType, selectedTypes)
                            ? <CheckIcon style={{ color: "green", margin: "auto" }}></CheckIcon>
                            : <CloseIcon style={{ color: "red", margin: "auto" }}></CloseIcon>}
                    </Grid>

                    <Grid item style={{ textAlign: "center" }}>
                        {pokemon.secondaryType ?
                            <>
                                <MiniTypeCard type={pokemon.secondaryType}></MiniTypeCard>
                                {checkAnswer(pokemon.secondaryType, selectedTypes)
                                    ? <CheckIcon style={{ color: "green", margin: "auto" }}></CheckIcon>
                                    : <CloseIcon style={{ color: "red", margin: "auto" }}></CloseIcon>}
                            </>
                            : null}
                    </Grid>
                </Grid>

                {/* */}
                <Grid item xs={2} style={{
                    display: "flex",
                    justifyContent: "flex-end"
                }}>
                    <Grid item style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <h3 style={{
                            margin: "5px 0px 0px 0px",
                        }} className={styles.text}>{`+${points}`}</h3>

                        <ArrowDropDownIcon fontSize="large"></ArrowDropDownIcon>
                    </Grid>
                </Grid>
            </Grid>

            <div style={{
                width: "250px",
                textAlign: "center",
            }}>
                <p style={{
                    margin: "auto",
                    width: "20px",
                    height: "20px",
                    border: "1px black solid",
                    mozBorderRadius: "50px",
                    webkitBorderRadius: "50px",
                    borderRadius: "50px"
                }}>{roundNum}</p>
            </div>
        </>
    )
}

export default RoundResultItem;