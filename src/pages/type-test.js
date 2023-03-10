import TypeCard from '../components/typecard/typecard.js'
import { typeData } from '../utils/typesInfo.js'

const TypeTest = () => {
    typeData.map(({name, primaryColor, secondaryColor }) => 
        console.log(name, primaryColor, secondaryColor)
    )
    return (
        <>
        {typeData.map(({ name, primaryColor, secondaryColor }) =>           
            <TypeCard style={{marginTop: "10px"}} type={name} primaryColor={primaryColor} secondaryColor={secondaryColor}></TypeCard>
        )}
        </>
    )
}


export default TypeTest