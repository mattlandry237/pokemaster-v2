
const checkSubmittedTypes = (currentPokemon, selectedTypes, score, setScore) => {
    let currentRoundPoints = 0
    const { primaryType, secondaryType } = currentPokemon
    if (selectedTypes.includes(primaryType)) currentRoundPoints++
    if (secondaryType) {
        if (selectedTypes.includes(secondaryType)) currentRoundPoints++
    }
    setScore(score + currentRoundPoints)
}

const typeSelected = (gameMode, selectedTypes, type, setStateFunc) => {
    if (gameMode == "play") {
        if (selectedTypes.includes(type)) {
            const arr = selectedTypes.filter(selectedType => selectedType !== type)
            setStateFunc(arr)
        } else {
            if (selectedTypes.length < 2) {
                setStateFunc([...selectedTypes, type])
            }
        }
    }
}

const getTypeResultsStyles = (type, selectedTypes, currentPokemon, gameMode) => {
    if (gameMode == "play") {
        if (selectedTypes.includes(type))
            return "selected"
        else
            return "notSelected"

    } else if (gameMode == "results") {
        if (selectedTypes.includes(type)) {
            if (currentPokemon.primaryType == type || currentPokemon.secondaryType == type) {
                return "correctSelected"
            } else {
                return "wrongSelected"
            }
        } else if (currentPokemon.primaryType == type || currentPokemon.secondaryType == type) {
            return "correctNotSelected"
        }
    } else {
        return "notSelected"
    }
}

export { checkSubmittedTypes, typeSelected, getTypeResultsStyles }