import styled from 'styled-components'
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import dayjs from "dayjs"
import Footer from "./Footer";
import Header from "./Header";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from '../Context/UserContext';

export default function History (){
    const [history, setHistory] = useState(null)
    const { user } = useContext(UserContext)

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", config)
        request.then((res) => {
            setHistory(res.data)
        })
        request.catch((err) => console.log(err.response.data))
        // eslint-disable-next-line
    }, [user.token])

    const checkDayHabits = ({date}) => {
        const formatedDate = dayjs(date).format('DD/MM/YYYY')
        const resultDay = history.find(item => item.day === formatedDate)
        if(!resultDay){
            return ""
        }
        const isAllDone = resultDay.habits.reduce((acc, habit) => acc && habit.done, true)
        return isAllDone ? "green" : "red"
    }

    if(!history){
        return (
            <div>Loading</div>
        )
    }

    return (
        <>
        <Header />
        <Container>
            <Title>Histórico</Title>
            <Calendar className="calendar" calendarType={'US'} tileClassName={checkDayHabits}/>
        </Container>
        <Footer />
        </>
    )
}

const Container = styled.div`
    margin: 95px auto;
    width: 90%;
    .calendar {
        border-style: none;
        border-radius: 10px;
    }
    .react-calendar__tile {
        margin: 8px auto;
        max-width: 10px;
        width: 10px;
        border-radius: 90px;
    }
    .red {
        background-color: #ea5766;
        border-radius: 30px;
    }
    .green {
        background-color: #8FC549;
        border-radius: 50px;
        width: 20px;
    }
`

const Title = styled.div`
    margin-bottom: 15px;
    color: #126BA5;
    font-size: 23px;
`