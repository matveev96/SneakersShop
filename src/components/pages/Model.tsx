import React from 'react';
import {adidasArr} from "./PageOne";
import {abibasArr} from "./PageThree";
import {pumaArr} from "./PageTwo";
import {useParams} from "react-router-dom";
import {S} from './_styles';

export const Model = () => {

    const params = useParams();
    const shoesArr = [...adidasArr, ...abibasArr, ...pumaArr]
    const shoes = shoesArr.find(el => el.id === params.id)
    if (!shoes) return (
        <S.ModelContainer>
            <span>Not Found</span>
        </S.ModelContainer>
    )
    return (
        <S.ModelContainer>
            <h2>{shoes.model}</h2>
            <span>{shoes.collection}</span>
            <span>{shoes.price}</span>
            <img src={shoes.picture} alt={shoes.model}/>
        </S.ModelContainer>

    )
}