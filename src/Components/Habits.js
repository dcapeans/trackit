import styled from "styled-components"
import Footer from "./Footer"
import CreateHabit from "./CreateHabit"

export default function Habits() {
    return (
        <Container>
            <Header>
                <img src="/assets/trackit.png" alt="TrackIt" />
                <img className="profileImg" src="/assets/profile.png" alt="Profile" />
            </Header>
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

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    background-color:  #126BA5;
    width: 100%;
    height: 70px;
    padding: 0 15px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

    .profileImg {
        width: 51px;
        height: 51px;
        border-radius: 100px;
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