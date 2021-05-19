import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"
import CreateHabit from "./CreateHabit"

export default function Habits() {
    return (
        <Container>
            <Header />
            <Title>
                <span>Meus hábitos</span>
                <button>+</button>
            </Title>
            <CreateHabit />
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 70px;

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
    margin: 25px 0;
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