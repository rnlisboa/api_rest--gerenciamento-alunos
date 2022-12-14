import styled, { createGlobalStyle } from 'styled-components'
import { primaryColor, primaryDarkColor } from '../config/colors'
//qualquer estilo dentro de globalstyles 
//vai ser importado em toda aplicação envolvida

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }
    body{
        font-family: sans-serif;
        background-color: ${primaryDarkColor};
        color: ${primaryDarkColor};
    }

    html, border-style, #root{
        height: 100%;
    }

    button{
        cursor: pointer;
        background-color: ${primaryColor};
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
        color: #fff;
    }

    a{
        color: ${primaryColor};
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`

export const Container = styled.section`
    max-width: 360px;
    background-color: #fff;
    margin: 30PX auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
`