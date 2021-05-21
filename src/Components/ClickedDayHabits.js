import { useContext } from "react"
import TodayHabitsContext from "../Context/TodayHabitsContext"
import { IoCheckmark } from "react-icons/io5"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

export default function ClickedDayHabits({dayHabits}){
    const { todayHabits } = useContext(TodayHabitsContext)
    
    const setDay = () => {
        const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
        const index = dayHabits.habits[0].weekDay
        return weekdays[index]
    }

    return (
        <>
        <Header />
        <Container>
            <Day>{setDay()} - {dayHabits.day}</Day>
            <Progress>{dayHabits.habits.filter((item)=> item.done).length ? `${((dayHabits.habits.filter((item)=> item.done).length / dayHabits.habits.length)*100).toFixed()}% dos hábitos concluídos` : "Nenhum hábito foi concluído"}
                
            </Progress>
            {dayHabits.habits.map((habit) => (
                <Habit key={habit.id}>
                    {habit.name}
                    <div style={{backgroundColor: habit.done ? "#8fc549" : "#ea5766"}}>
                        <IoCheckmark/>
                    </div>
                </Habit>
                
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

const Habit = styled.div`
    width: 100%;
    position: relative;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin: 5px auto;
    border-radius: 5px;
    color: #666;
    font-size: 22px;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        font-size: 50px;
        color: #fff;
    }
`