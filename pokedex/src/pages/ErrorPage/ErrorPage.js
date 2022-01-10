import { Typography } from "@material-ui/core";
import React from "react"
import { ErrorContainer, ErrorImg } from "./styled"
import erro from '../../assets/error.png';

const ErrorPage = () => {
 return (
    <ErrorContainer>
    <ErrorImg src={erro}/>
    <Typography variant='h3' color='error'>
        Erro - Página não encontrada!
    </Typography>
    </ErrorContainer>
 )
}

export default ErrorPage;