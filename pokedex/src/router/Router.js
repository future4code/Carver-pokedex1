import React from "react"
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import DetailsPage from "../pages/DetailesPage/DetailsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";



const Router = () => {
    return (
    <BrowserRouter>
    
        <Header/>

        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/pokedex">
                <PokedexPage/>
            </Route>
            <Route exact path="/detail">
                <DetailsPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default Router;