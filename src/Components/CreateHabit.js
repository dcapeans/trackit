import styled from "styled-components"

export default function CreateHabit({showCreateHabit, setShowCreateHabit}){

    const hideCreateBox = () => {
        setShowCreateHabit(false)
    }

    return (
        <StyledCreateHabit isEnabled={showCreateHabit}>
            <input type="text" placeholder="nome do hábito"/>
            <Weekdays>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </Weekdays>
            <div className="buttons__container">
                <button className="cancel__btn" onClick={hideCreateBox}>Cancelar</button>
                <button className="save__btn">Salvar</button>
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
    margin: 0  auto;
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
`