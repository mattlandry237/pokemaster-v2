import TypeData from "../utils/typeData.js"
import TypeCard from "../components/typecard/typecard.js"
import { getType } from "../utils/helpers.js"
import React, { useState, useEffect, useRef } from "react"
import Button from "@mui/material/Button"
import { typeData } from "../utils/typeData.js"
import Grid from '@mui/material/Grid'


export async function getServerSideProps() {
    const type = await getType();

    return {
        props: {
            type
        }
    }
}

export default function TypeEffectiveness({ type }) {
    
    const [currentType, setCurrentType] = useState(type)
    const [genBtn, setGenBtn] = useState(0)
    const didMountRef = useRef(false)

    const getNewType = async () => {
        const newType = await getType();
        
        if(newType != currentType){
            setCurrentType(newType)
        }else{
            getNewType()
        }
    }

    useEffect(() => {
        if(didMountRef.current){
            console.log("getting new type")
            getNewType()
            console.log(currentType)
        }
        didMountRef.current = true
    },[genBtn])


    const checkType = (type) => {
        if( currentType.name == type){
            console.log("correct")
        }else {
            console.log("wrong")
        }
    }

    const x = {
        name: "name",
        type1: "type1",
        type2: "type2"
    }

    const arr = ["water", "fire"]

    const finalGame = []
    console.log(finalGame)
    finalGame.push({...x, arr})
    console.log(finalGame)

    return (
        <>
            <h1>Current Type: {currentType.name}</h1>
            <Button variant="contained" onClick={() => setGenBtn(genBtn + 1)}>New Type {genBtn}</Button>
        </> 
    )
}
