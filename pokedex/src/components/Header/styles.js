import { Toolbar } from "@material-ui/core";
import styled from "styled-components";

export const StyledToolbar = styled(Toolbar)`
display: flex;
flex-direction: row;
justify-content: space-between;

img{

    :hover{
        cursor: pointer;
    }
}

button{
    margin-left: 50px;
}
`