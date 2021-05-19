import { Link, useHistory } from "react-router-dom"
import { useState, useContext } from "react"
import UserContext from "../Context/UserContext"
import Logo from "./Logo";
import SignUpLink from "./SignUpLink";
import styled from "styled-components"
import axios from "axios";
import Loader from "react-loader-spinner"

export default function Home(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { setUser } = useContext(UserContext)
    let history = useHistory()

    const login = () => {
        const body = {
            email,
            password
        }
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
        setIsLoading(true)
        request.then((res)=> {
            setUser(res.data)
            history.push("/hoje")
            setIsLoading(false)
        }) 
        request.catch((err)=> {
            alert("Ocorreu um erro ao entrar. Tente novamente")
            setIsLoading(false)
        })
    }

    return (
        <Container>
            <Logo />
            <input disabled={isLoading} type="text" placeholder="email" onChange={(e)=> setEmail(e.target.value)} />
            <input disabled={isLoading} type="password" placeholder="senha" onChange={(e)=> setPassword(e.target.value)} />
            <Button onClick={login} disabled={isLoading}>{isLoading ? <Loader type="ThreeDots" color="#FFF" height={45}/> : "Entrar"}</Button>
            <Link to="/cadastro">
                <SignUpLink text="Não tem uma conta? Cadastre-se!"/>
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
        font-family: inherit
    }
    input::placeholder {
        color: #dbdbdb;
    }
`

const Button = styled.button`
    width: 85%;
    height: 45px;
    background: #52b6ff;
    opacity: ${props => props.disabled ? "0.7" : "1"};
    border-style: none;
    border-radius: 5px;
    color: #fff;
    font-size: 21px;
    margin-top: 3px;
    margin-bottom: 30px;
    font-family: inherit;
    outline: none;
`