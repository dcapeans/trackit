import styled from "styled-components"
import UserContext from "../Context/UserContext"
import { useState, useContext } from "react"
import axios from "axios"
import Loader from "react-loader-spinner"

export default function CreateHabit({showCreateHabit, setShowCreateHabit, fetchHabits}){
    const [habitName, setHabitName] = useState("")
    const [days, setDays] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useContext(UserContext)

    const hideCreateBox = () => {
        setShowCreateHabit(false)
    }

    const saveHabit = (e) => {
        e.preventDefault()

        const body = {
            name: habitName,
            days
        }
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        setIsLoading(true)
        request.then((res) => {
            setIsLoading(false)
            fetchHabits()
            setShowCreateHabit(false)
            setHabitName("")
            setDays([])
        })
        request.catch((err) => {
            setIsLoading(false)
            alert("Ocorreu um erro ao salvar o hábito")
        })
    }

    const saveDay = (e) => {
        if(days.includes(e.target.id)){
            const newArr = days.filter(day => day !== e.target.id)
            setDays(newArr)
            return
        } 
        setDays([...days, e.target.id])
    }

    return (
        <StyledCreateHabit isEnabled={showCreateHabit}>
            <input type="text" value={habitName} placeholder="nome do hábito" onChange={(e) => setHabitName(e.target.value)} required disabled={isLoading}/>
            <Weekdays>
                <button id="7" onClick={saveDay} className={days.includes("7") ? "selected" : ""} disabled={isLoading}>D</button>
                <button id="1" onClick={saveDay} className={days.includes("1") ? "selected" : ""} disabled={isLoading}>S</button>
                <button id="2" onClick={saveDay} className={days.includes("2") ? "selected" : ""} disabled={isLoading}>T</button>
                <button id="3" onClick={saveDay} className={days.includes("3") ? "selected" : ""} disabled={isLoading}>Q</button>
                <button id="4" onClick={saveDay} className={days.includes("4") ? "selected" : ""} disabled={isLoading}>Q</button>
                <button id="5" onClick={saveDay} className={days.includes("5") ? "selected" : ""} disabled={isLoading}>S</button>
                <button id="6" onClick={saveDay} className={days.includes("6") ? "selected" : ""} disabled={isLoading}>S</button>
            </Weekdays>
            <div className="buttons__container">
                <button className="cancel__btn" onClick={hideCreateBox}>Cancelar</button>
                <button className="save__btn" onClick={saveHabit}>{isLoading ? <Loader type="ThreeDots" color="#FFF" height={35} width={60}/> : "Salvar"}</button>
            </div>
        </StyledCreateHabit>
    )
}

const StyledCreateHabit = styled.div`
    background-color: #fff;
    display: ${props => props.isEnabled ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    width: 92%;
    margin: 10px auto;
    padding: 18px;
    border-radius: 5px;

    input {
        height: 45px;
        border-radius: 5px;
        border: 1px solid #d5d5d5;
        margin-bottom: 10px;
        padding-left: 10px;
        font-family: inherit;
    }

    input::placeholder{
        color: #dbdbdb;
        font-size: 20px;
    }

    .buttons__container {
        display: flex;
        justify-content: flex-end;
    }

    .cancel__btn {
        background-color: transparent;
        color: #52b6ff;
        font-size: 16px;
        border-style: none;
        font-family: inherit;
    }

    .save__btn {
        height: 35px;
        width: 84px;
        background-color: #52b6ff;
        color: #fff;
        border-style: none;
        border-radius: 5px;
        font-family: inherit;
        font-size: 16px;
        margin-left: 20px;
    }
`

const Weekdays = styled.div`
    button {
        width: 30px;
        height: 30px;
        background-color: #fff;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        color: #d4d4d4;
        font-size: 20px;
        font-family: inherit;
        margin-right: 4px;
        margin-bottom: 30px;
    }

    .selected {
        background-color: #666;
        color: #fff
    }
`