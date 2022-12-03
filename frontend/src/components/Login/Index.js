import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";
export default function Login() {
    return (
        <Container>
            <Title>
                Login
                <small>Lorem</small>
            </Title>
            <Paragrafo>Lorem ipsum lorem sit amet</Paragrafo>
            <button>Enviar</button>
        </Container>
    )

}