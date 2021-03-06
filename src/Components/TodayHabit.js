import styled from "styled-components"
import UserContext from "../Context/UserContext"
import { IoCheckmark } from "react-icons/io5"
import { useContext } from "react"
import axios from "axios"

export default function TodayHabit({ todayHabit, fetchTodayHabits }){
    const { user } = useContext(UserContext)

    const checkHabitDone = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        if(todayHabit.done){
            const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/habits/${todayHabit.id}/uncheck`, [], config)
            request.then((res) => {
                fetchTodayHabits()
            })
            request.catch((err) => console.log(err.response.data))
            
            return
        }
        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/habits/${todayHabit.id}/check`, [], config)
        request.then((res) => {
            fetchTodayHabits()
        })
        request.catch((err) => console.log(err.response.data))
    }

    return (
        <Container>
            <div>
                <p>{todayHabit.name}</p>
                <span>Sequência atual: 
                    <span className={todayHabit.done ? "highlight" : ""}>
                        {todayHabit.currentSequence} dias
                    </span>
                </span>
                <span>Seu recorde: 
                    <span className={todayHabit.currentSequence === todayHabit.highestSequence && todayHabit.highestSequence > 0? "highlight": ""}>
                        {todayHabit.highestSequence} dias
                    </span>
                </span>
            </div>
            <div className={todayHabit.done ? "checkmark checked" : "checkmark"} onClick={checkHabitDone}>
                <IoCheckmark/>
            </div>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    position: relative;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin: 5px auto;
    border-radius: 5px;
    color: #666;
    font-size: 13px;
    .trash__icon {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 20px;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    p {
        font-size: 20px;
        margin-bottom: 15px;
    }
    .checkmark {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ebebeb;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        width: 64px;
        height: 64px;
        font-size: 50px;
        color: #fff;
    }
    .checked {
        background-color: #8fc549;
    }

    .highlight {
        color:  #8fc549;
    }
`