import styled from "styled-components"

export const ContainerDetail = styled.div`
display: flex;
flex-direction: column;
h1{
    text-align: center;
    margin-bottom: 10vh;
}
`
export const ContainerOrg = styled.div`
display: flex;
justify-content: center;
`

export const ContainerImg = styled.div`
background-color: #F7C600; 
width: 300px;
height: 400px;
margin-right: 10vw;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10%;

img{
    width: 200px;
}
`
export const ContainerTypes = styled.div`
background-color: #F7C600;
width: 15vw;
margin-bottom: 4vh;
border-radius: 15px;

div{
    display: flex;
    justify-content: center;

    p{
        margin-right: 50px;
    }
}
`

export const ContainerOrg2 = styled.div `
height: 400px;
width: 20vw;
display: flex;
flex-direction: column;
align-items: center;
`

export const ContainerStats = styled.div`
background-color: #F7C600;
width: 20vw;
margin-right: 10vw;
display: flex;
flex-direction: column;
align-items: center;
height: 400px;
border-radius: 10%;
`
export const ContainerMoves= styled.div`
background-color: #F7C600;
width: 15vw;
display: flex;
flex-direction: column;
align-items: center;
height: 310px;
border-radius: 10%;
`