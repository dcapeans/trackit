import styled from "styled-components"
import { IoTrashOutline } from "react-icons/io5"
import axios from "axios"
import UserContext from "../Context/UserContext"
import { useContext } from "react"

export default function Habit({ habit, habits, setHabits, fetchHabits }){
    const { user } = useContext(UserContext)

    const deleteHabit = () =>{
        if(window.confirm(`Tem certeza que quer apagar o hábito ${habit.name}?`)){

        }
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const request = axios.delete(`${process.env.REACT_APP_API_BASE_URL}/habits/${habit.id}`, config )
        request.then((res) => {
            fetchHabits()
        })
        request.catch((err) => console.log(err))
    }

    return(
        <Container>
            <span>{habit.name}</span>
            <Weekdays>
                <button id="7" className={habit.days.includes(7) ? "selected" : ""}>D</button>
                <button id="1" className={habit.days.includes(1) ? "selected" : ""}>S</button>
                <button id="2" className={habit.days.includes(2) ? "selected" : ""}>T</button>
                <button id="3" className={habit.days.includes(3) ? "selected" : ""}>Q</button>
                <button id="4" className={habit.days.includes(4) ? "selected" : ""}>Q</button>
                <button id="5" className={habit.days.includes(5) ? "selected" : ""}>S</button>
                <button id="6" className={habit.days.includes(6) ? "selected" : ""}>S</button>
            </Weekdays>
            <div className="trash__icon" onClick={deleteHabit}>
                <IoTrashOutline />
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 92%;
    padding: 15px;
    margin: 5px auto;
    border-radius: 5px;
    color: #666;
    font-size: 20px;

    .trash__icon {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 20px;
    }
`

const Weekdays = styled.div`
    margin-top: 15px;

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
    }

    .selected {
        background-color: #666;
        color: #fff
    }
`