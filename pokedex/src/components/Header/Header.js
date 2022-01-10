import { AppBar, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { goToHome, goToPokedex } from "../../router/coordinator";
import { StyledToolbar } from "./styles";
import logo from '../../assets/pokemonlogo.png'
import { useState } from "react";


const Header = () => {
    const history = useHistory()
    const [button, setButton] = useState('Pokedex')

    const changeButton = () => {
        if (button === 'Pokedex') {
            goToPokedex(history)
            setButton('Home')
        } else {
            goToHome(history)
            setButton('Pokedex')
        }
        
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
                <img src={logo} width='150px' onClick={() => goToHome(history)}/>
                <div>
                    <Button variant={'text'} onClick={changeButton}>{button}</Button>
                </div>


            </StyledToolbar>
        </AppBar>
    )
}

export default Header;