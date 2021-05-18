import { Link} from "react-router-dom"
import Logo from "./Logo";
import SignUpLink from "./SignUpLink";
import styled from "styled-components"

export default function SignUp(){
    return (
        <Container>
            <Logo />
            <input type="text" placeholder="email"/>
            <input type="password" placeholder="senha"/>
            <input type="text" placeholder="nome"/>
            <input type="url" placeholder="foto"/>
            <button>Cadastrar</button>
            <Link to="/">
                <SignUpLink text="Já tem uma conta? Faça login!" />
            </Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    height: 100vh;
    input {
        width: 85%;
        height: 45px;
        font-size: 19px;
        border: 1px solid #d5d5d5;
        border-radius:5px;
        margin: 3px 0;
        font-family: inherit;
    }
    input::placeholder {
        color: #dbdbdb;
    }
    button {
        width: 85%;
        height: 45px;
        background: #52b6ff;
        border-style: none;
        border-radius: 5px;
        color: #fff;
        font-size: 21px;
        margin-top: 3px;
        margin-bottom: 30px;
        font-family: inherit;
        outline: none;
    }
`