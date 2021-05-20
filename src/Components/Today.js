import axios from "axios"
import dayjs from "dayjs"
import updateLocale from "dayjs/plugin/updateLocale"
import { useCallback, useContext, useEffect, useState } from "react"
import UserContext from "../Context/UserContext"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"
import TodayHabit from "./TodayHabit"

export default function Today(){
    const [todayHabits, setTodayHabits] = useState([])
    const { user } = useContext(UserContext)

    dayjs().format()
    dayjs.extend(updateLocale)
    dayjs.updateLocale('en', {
        weekdays: [
          "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
        ]
    })

    const fetchTodayHabits = useCallback(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        request.then((res) => setTodayHabits(res.data))
        request.catch((err) => console.log(err))
    }, [user.token])

    useEffect(() => {
        fetchTodayHabits()
    }, [fetchTodayHabits])

    return (
        <>
        <Header />
        <Container>
            <Day>{dayjs().format("dddd, DD/MM")}</Day>
            <Progress>{todayHabits.filter((item)=> item.done).length ? `${((todayHabits.filter((item)=> item.done).length / todayHabits.length)*100).toFixed()}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
                
            </Progress>
            {todayHabits.map((todayHabit) => (
                <TodayHabit key={todayHabit.id} todayHabit={todayHabit} fetchTodayHabits={fetchTodayHabits}/>
            ))}
        </Container>
        <Footer todayHabits={todayHabits}/>
        </>
    )
}

const Container = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 100px;
    padding: 17px;
`

const Day = styled.div`
    color: #126ba5;
    font-size: 23px;
`

const Progress = styled.p`
    color: #8fc549;
    font-size: 18px;
    margin-top: 7px;
    margin-bottom: 20px;
`