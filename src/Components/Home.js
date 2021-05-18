import Logo from "./Logo";
import SignUpLink from "./SignUpLink";
import Button from "./Button"
import styled from "styled-components"

export default function Home(){
    return (
        <Container>
            <Logo />
            <input type="text" placeholder="email"/>
            <input type="password" placeholder="senha"/>
            <Button text="Entrar" />
            <SignUpLink text="Não tem uma conta? Cadastre-se!" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    input {
        width: 90%;
        height: 45px;
        font-size: 19px;
        border: 1px solid #d5d5d5;
        border-radius:5px;
        margin: 3px 0;
    }
    input::placeholder {
        color: #dbdbdb;
    }
`