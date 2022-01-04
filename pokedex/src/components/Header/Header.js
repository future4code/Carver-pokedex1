import { AppBar, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { goToDetailPage, goToHome } from "../../router/coordinator";
import { StyledToolbar } from "./styles";


const Header = () => {
    const history = useHistory()

return (
    <AppBar position="static">
        <StyledToolbar>
            <h2>Pokemon</h2>
            <div>
            <Button onClick={() => goToHome(history)}> Home </Button>
            <Button onClick={() => goToDetailPage(history)}> Ir para Pokedex</Button>
            </div>
            

        </StyledToolbar>
    </AppBar>
)
}

export default Header;