import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer(){
    const value = 66

    return (
        <StyledFooter>
            <Link to="/habitos">
                <button>Hábitos</button>
            </Link>
            <Link to="/hoje" className="progressbar">
                <CircularProgressbar value={value} text="Hoje" background backgroundPadding={6} styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}/>
            </Link>
            <Link to="/historico">
                <button>Histórico</button>
            </Link>
            
            
            
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #fff;

    button {
        background-color: transparent;
        border-style: none;
        color: #52B6FF;
        font-size: 18px;
        font-family: inherit
    }

    .progressbar {
        width: 91px;
        height: 91px;
        margin-bottom: 50px;
    }
`