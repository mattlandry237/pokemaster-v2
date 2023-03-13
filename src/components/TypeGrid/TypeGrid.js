import Grid from '@mui/material/Grid'
import TypeCard from '../TypeCard/'
import styles from './TypeGrid.module.css'

import { typeData } from '../../utils/typeData.js'


const TypeGrid = ({ typeSelectedFunc, getTypeResultsStylesFunc, selectedTypes, currentPokemon, gameMode, setStateFunc }) => {

    return (
        <Grid container item xs={8} sx={{ mt: '30px' }} className={styles.typesContainer} rowSpacing={1} align="center">
            {typeData.map(({ name, primaryColor, secondaryColor }) =>
                <Grid item sx={{ m: "auto" }} xs={8} sm={6} md={4} xl={2} align="center" onClick={() => typeSelectedFunc(gameMode, selectedTypes, name, setStateFunc)}>
                    <TypeCard type={name} primaryColor={primaryColor} secondaryColor={secondaryColor} button={true} highlight={getTypeResultsStylesFunc(name, selectedTypes, currentPokemon, gameMode)}></TypeCard>
                </Grid>
            )}
        </Grid>
    )
}

export default TypeGrid;

