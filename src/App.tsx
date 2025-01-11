import React from 'react';
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import { S } from './components/pages/_styles';
import {Model} from "./components/pages/Model";

const PATH = {
    PAGE1: 'adidas',
    PAGE2: 'puma',
    PAGE3: 'abibas',
    ERROR: '*',
    MODEL: ':model/:id',
    DEFAULT: '/'
} as const

function App() {
    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Navigation>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE1}>
                            Adidas
                        </NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE2}>
                            Puma
                        </NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE3}>
                            Abibas
                        </NavLink>
                    </S.NavWrapper>
                </S.Navigation>
                <S.Content>
                    <Routes>
                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.ERROR} element={<Error404/>}/>
                        <Route path={PATH.MODEL} element={<Model/>}/>
                        <Route path={PATH.DEFAULT} element={<Navigate to='/adidas'/>}/>
                    </Routes>
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}

export default App;

