import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {S} from './components/pages/_styles';
import {PATH} from "./routes/router";

function App() {

    const navigate = useNavigate()

    const navigateHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        navigate(-1)
    }

    return (
        <>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Navigation>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PROTECTED_PAGE}>Protected Page</NavLink></S.NavWrapper>
                </S.Navigation>
                <S.Content>
                    <S.HorizontalNavigation>
                        <S.LinkLikeButton to={PATH.ADIDAS}> Main Page (ADIDAS) </S.LinkLikeButton>
                        <S.ButtonLikeLink onClick={navigateHandler} to={'..'}> Previous Page </S.ButtonLikeLink>
                    </S.HorizontalNavigation>
                    <Outlet/>
                </S.Content>
            </S.Body>
            <S.Footer>PODKRADYLI 2024</S.Footer>
        </>
    );
}

export default App;

