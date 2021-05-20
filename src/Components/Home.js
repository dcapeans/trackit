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
    const { user, setUser } = useContext(UserContext)
    let history = useHistory()
    console.log(localStorage.getItem(user))

    if(localStorage.getItem("user")){
        setUser(JSON.parse(localStorage.getItem("user")))
        history.push("/hoje")
    }

    const login = (e) => {
        e.preventDefault()
        const body = {
            email,
            password
        }
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
        setIsLoading(true)
        request.then((res)=> {
            console.log(res.data)
            setUser(res.data)
            localStorage.setItem( "user", JSON.stringify(res.data))
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
            <form onSubmit={login}>
                <input disabled={isLoading} type="text" placeholder="email" onChange={(e)=> setEmail(e.target.value)} required/>
                <input disabled={isLoading} type="password" placeholder="senha" onChange={(e)=> setPassword(e.target.value)} required/>
                <Button disabled={isLoading} type="submit">{isLoading ? <Loader type="ThreeDots" color="#FFF" height={45}/> : "Entrar"}</Button>
            </form>
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
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
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