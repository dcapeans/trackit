import { Link, useHistory } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import Logo from "./Logo";
import SignUpLink from "./SignUpLink";
import styled from "styled-components"

export default function SignUp(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    let history = useHistory()

    const SignUp = () => {
        const body = {
            email, 
            name,
            image,
            password
        }
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
        request.then(() => history.push("/"))
        request.catch((err)=> console.log(err))
    }

    return (
        <Container>
            <Logo />
            <input type="text" placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder="senha" onChange={(e)=> setPassword(e.target.value)}/>
            <input type="text" placeholder="nome" onChange={(e)=> setName(e.target.value)}/>
            <input type="url" placeholder="foto" onChange={(e)=> setImage(e.target.value)}/>
            <button onClick={SignUp}>Cadastrar</button>
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