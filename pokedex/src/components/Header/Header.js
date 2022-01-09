import { AppBar, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { goToHome, goToPokedex } from "../../router/coordinator";
import { StyledToolbar } from "./styles";
import logo from '../../assets/pokemonlogo.png'


const Header = () => {
    const history = useHistory()

    return (
        <AppBar position="static">
            <StyledToolbar>
                <img src={logo} width='150px' onClick={() => goToHome(history)}/>
                <div>
                    <Button variant={'text'} onClick={() => goToHome(history)}> Home </Button>
                    <Button variant={'text'} onClick={() => goToPokedex(history)}> Ir para Pokedex</Button>
                </div>


            </StyledToolbar>
        </AppBar>
    )
}

export default Header;