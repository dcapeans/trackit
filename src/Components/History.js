import styled from 'styled-components'
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import dayjs from "dayjs"
import Footer from "./Footer";
import Header from "./Header";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from '../Context/UserContext';
import { useHistory } from 'react-router'
import Loader from "react-loader-spinner"

export default function History ({setDayHabits}){
    const [history, setHistory] = useState(null)
    const { user } = useContext(UserContext)
    let reactHistory = useHistory()

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

    const checkDayCompleted = ({date}) => {
        const formatedDate = dayjs(date).format('DD/MM/YYYY')
        const resultDay = history.find(item => item.day === formatedDate)
        if(!resultDay){
            return ""
        }
        const isAllDone = resultDay.habits.reduce((acc, habit) => acc && habit.done, true)
        return isAllDone ? "green" : "red"
    }

    const checkDayHabits = (value) => {
        const formatedDate = (dayjs(value).format('DD/MM/YYYY'))
        const result = history.find(item => item.day === formatedDate)
        console.log(result)
        setDayHabits(result)
        reactHistory.push("/dia")
    }

    if(!history){
        return (
            <StyledLoader>
                <Loader type="ThreeDots" color="#3e98c7" height={100} width={100}/>
            </StyledLoader>
        )
    }

    return (
        <>
        <Header />
        <Container>
            <Title>Histórico</Title>
            <Calendar className="calendar" calendarType={'US'} tileClassName={checkDayCompleted} onClickDay={checkDayHabits}/>
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

const StyledLoader = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`