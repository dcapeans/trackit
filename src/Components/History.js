import styled from 'styled-components'
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import Footer from "./Footer";
import Header from "./Header";

export default function History (){
    return (
        <>
        <Header />
        <Container>
            <Title>Histórico</Title>
            <Calendar calendarType={'US'}/>
        </Container>
        <Footer />
        </>
    )
}

const Container = styled.div`
    margin: 95px auto;
    width: 90%;
    .react-calendar {
        border-style: none;
        border-radius: 10px;
    }
    .react-calendar__tile {
        margin: 8px 0;
    }
`

const Title = styled.div`
    margin-bottom: 15px;
    color: #126BA5;
    font-size: 23px;
`