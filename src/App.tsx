import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {S} from './components/pages/_styles';
import {PATH} from "./routes/router";

function App() {

    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Navigation>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
                </S.Navigation>
                <S.Content>
                    <Outlet/>
                </S.Content>
            </S.Body>
            <S.Footer>PODKRADYLI 2024</S.Footer>
        </div>
    );
}

export default App;

