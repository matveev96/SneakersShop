import React from 'react';
import {adidasArr} from "./Adidas";
import {abibasArr} from "./Abibas";
import {pumaArr} from "./Puma";
import {useParams} from "react-router-dom";
import {S} from './_styles';

export type ShoesItem = {
    id: string
    model: string;
    collection: string;
    price: string;
    picture: string;
}

type ModelType = {
    [key: string]: ShoesItem[];
}

const modelShoes: ModelType = {
    adidas: adidasArr,
    abibas: abibasArr,
    puma: pumaArr
}

export const Model = () => {

    const {model, id} = useParams();

    const shoes = model ? modelShoes[model].find(el => el.id === id) : null

    return (
        <S.ModelContainer>
            {shoes ?
                <>
                    <h2>{shoes.model}</h2>
                    <span>{shoes.collection}</span>
                    <span>{shoes.price}</span>
                    <img src={shoes.picture} alt={shoes.model}/>
                </> :
                <span>Shoes Not Found</span>
            }
        </S.ModelContainer>
    )
}