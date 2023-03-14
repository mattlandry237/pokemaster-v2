import Grid from '@mui/material/Grid'
import Image from 'next/image'
import MiniTypeCard from '../MiniTypeCard'
import styles from './RoundResultItem.module.css'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const RoundResultItem = ({ pokemon, selectedTypes }) => {

    const points = 1;

    return (
        <Grid container justifyContent="space-between" className={styles.container} style={{
            width: "250px"
        }}>
            {/* */}
            <Grid item container xs={4} style={{
                display: "flex",
                justifyContent: "center",

            }}>
                <Image width={90} height={90} src={pokemon.sprite} alt={`Pokemon Name: ${pokemon.name}`} style={{
                    paddingBottom: "5px"
                }} />
            </Grid>


            {/* */}
            <Grid item container xs={5} columnSpacing={1} style={{
                display: "flex",
                justifyContent: "flex-start",
                alignSelf: "center"
            }}>

                <Grid item style={{ textAlign: "center" }}>
                    <MiniTypeCard type={pokemon.primaryType}></MiniTypeCard>
                    <CheckIcon style={{ color: "green", margin: "auto" }}></CheckIcon>

                </Grid>

                <Grid item style={{ textAlign: "center" }}>
                    {pokemon.secondaryType ?
                        <>
                            <MiniTypeCard type={pokemon.secondaryType}></MiniTypeCard>
                            <CloseIcon style={{ color: "red", margin: "auto" }}></CloseIcon>
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
                    <h3 style={{ margin: "5px 0px 0px 0px" }} className={styles.text}>{`+${points}`}</h3>
                    <ArrowDropDownIcon fontSize="large"></ArrowDropDownIcon>
                </Grid>
            </Grid>
        </Grid>

    )
}


export default RoundResultItem;