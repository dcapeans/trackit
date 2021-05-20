import dayjs from "dayjs"
import updateLocale from "dayjs/plugin/updateLocale"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"
import TodayHabit from "./TodayHabit"

export default function Today(){
    dayjs().format()
    dayjs.extend(updateLocale)
    dayjs.updateLocale('en', {
        weekdays: [
          "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
        ]
      })
      
    return (
        <>
        <Header />
        <Container>
            <Day>{dayjs().format("dddd, DD/MM")}</Day>
            <Progress>67% dos hábitos concluídos</Progress>
            <TodayHabit />
        </Container>
        <Footer />
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