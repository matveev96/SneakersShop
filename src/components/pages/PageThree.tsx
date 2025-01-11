import React from 'react';
import abibas1 from '../../assets/abibas1.jpg'
import abibas2 from '../../assets/abibas2.jpeg'
import abibas3 from '../../assets/abibas3.jpg'
import {Link} from "react-router-dom";
import {S} from "./_styles";

export type AbibasItem = {
    id: string
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const abibasArr: AbibasItem[] = [
    {
        id: 'abib0',
        model: 'ABIBAS ABIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: abibas1,

    },
    {
        id: 'abib1',
        model: 'ABIBAS ABIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: abibas2
    },
    {
        id: 'abib2',
        model: 'ABIBAS SUPERB SUPERSKIB',
        collection: 'new collection333',
        price: '300400$',
        picture: abibas3
    }
]

export const PageThree = () => {
    return (
        <div>
            <h2>ABIBAS</h2>
            <S.PictureWrapper>
                {abibasArr.map((el, index) => (
                        <Link to={`/${el.id}`} key={index}>
                            <img src={el.picture}
                                 alt={el.model}/>
                        </Link>
                    )
                )}
            </S.PictureWrapper>
            <p>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </div>
    );
};

