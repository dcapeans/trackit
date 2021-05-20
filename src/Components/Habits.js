import { useContext, useEffect, useState } from "react"
import UserContext from "../Context/UserContext"
import axios from "axios"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"
import CreateHabit from "./CreateHabit"
import Habit from "./Habit"

export default function Habits() {
    const [showCreateHabit, setShowCreateHabit] = useState(false)
    const [habits, setHabits] = useState(null)
    const { user } = useContext(UserContext)

    useEffect(()=>{
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        request.then((res)=> {
            console.log(res.data)
            setHabits(res.data)
        })
        request.catch((err)=>console.log(err))
    }, [user.token])

    const showCreateBox = () => {
        setShowCreateHabit(true)
    }

    return (
        <Container>
            <Header />
            <Title>
                <span>Meus hábitos</span>
                <button onClick={showCreateBox}>+</button>
            </Title>
            <CreateHabit showCreateHabit={showCreateHabit} setShowCreateHabit={setShowCreateHabit}/>
            {habits ? 
                habits.map((habit, i) => (
                    <Habit key={i} habit={habit} habits={habits} setHabits={setHabits}/>
                )) :
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            }
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 100px;

    p {
        width: 90%;
        margin: 20px auto;
        font-size: 18px;
        color: #666;
        line-height: 22px;
    }
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    margin: 25px 0 10px 0;
    color: #126BA5;
    font-size: 23px;

    button {
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        border-style: none;
        color: #fff;
        font-size: 28px;
    }
`