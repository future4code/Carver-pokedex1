import { createMuiTheme } from "@material-ui/core";
import { neutralColor, primaryColor, segundaryColor } from "./colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: segundaryColor,
            contrastText: 'white'
        },
        secondary: {
            main: segundaryColor
        },
        text:{
            primary: neutralColor
        }
    }
})

export default theme