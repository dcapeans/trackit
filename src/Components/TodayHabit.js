import styled from "styled-components"
import { IoCheckmark } from "react-icons/io5"

export default function TodayHabit(){
    return (
        <Container>
            <div>
                <p>nome</p>
                <span>Sequência atual: 4 dias</span>
                <span>Seu recorde: 5 dias</span>
            </div>
            <div className="checkmark">
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
        background-color: #8fc549;
        border-radius: 5px;
        width: 64px;
        height: 64px;
        font-size: 50px;
        color: #fff;
    }
`