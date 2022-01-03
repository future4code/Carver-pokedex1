import React from "react"
import { Route } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../page/PokedexPage/PokedexPage"
import DetailPage from "../page/DetailPage/DetailPage"
import ErrorPage from "../page/ErrorPage/ErrorPage"



const Router = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/pokedex">
                <PokedexPage/>
            </Route>
            <Route exact path="/detail">
                <DetailPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default Router;