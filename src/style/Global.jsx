import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Raleway', sans-serif;
    }
`;

export const Home = styled.main`
    
`;

export const Article = styled.article`
    padding: 5vh 5%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1000px){
        padding: 5vh 10%;
    }
`;

export const Intro = styled.p`
    text-align: left;
    margin-top: 2.5vh;
    font-size: 1em;

    span{
        font-weight: 900;
    }

    @media screen and (min-width: 700px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 1000px){
        font-size: 1.2em;
    }
`;

export  const Title = styled.h1`
    text-align: center;
    font-size: 2em;
`;

export const Cards = styled.section`
    margin-top: 5vh;    
`;

export const CardsWrapper = styled.div`
    padding: 0 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 5vh;

    @media screen and (min-width: 1000px){
        justify-content: flex-start;
        gap: 1rem;
    }
`;

export const Card = styled.div`
    margin-top: 3vh;
    width: 35vw;
    height: 17vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: blueviolet;

    @media screen and (min-width: 500px){
        width: 25vw;
    }

    @media screen and (min-width: 1000px){
        width: 13vw;
    }

    @media screen and (min-width: 1281px){
        width: 11vw;
        height: 20vh;
    }
`;

export const CardTitle = styled.h3`
    color: #FFF;
    text-align: center;
    font-size: 0.8em;
    width: 60%;

    @media screen and (min-width: 700px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 1000px){
        font-size: 0.9em;
    }

    @media screen and (min-width: 1281px){
        font-size: 1em;
        margin-top: 1vh;
    }
`;

export const Image = styled.img`
    margin-top: 2vh;
    width: 20vw;
    height: 7vh;

    @media screen and (min-width: 700px){
        margin-top: 1vh;
    }

    @media screen and (min-width: 1000px){
        width: 8vw;
    }

    @media screen and (min-width: 1281px){
        height: 10vh
    }
`;