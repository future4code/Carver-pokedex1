import { createMuiTheme } from "@material-ui/core";
import { neutralColor, primaryColor, segundaryColor } from "./colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: 'white'
        },
        secondary: {
            main: primaryColor
        },
        text:{
            primary: neutralColor
        }
    }
})

export default theme