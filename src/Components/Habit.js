import styled from "styled-components"
import { IoTrashOutline } from "react-icons/io5"

export default function Habit(){
    return(
        <Container>
            <span>Nome do hábito</span>
            <Weekdays>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </Weekdays>
            <div className="trash__icon">
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
    margin: 0  auto;
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
`