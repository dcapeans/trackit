import styled from "styled-components"
import { useContext } from "react"
import UserContext from "../Context/UserContext"

export default function Header(){
    const { user } = useContext(UserContext)

    return (
        <StyledHeader>
            <img src="/assets/trackit.png" alt="TrackIt" />
            <img className="profileImg" src={user.image} alt="Profile" />
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
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
    z-index: 1;

    .profileImg {
        width: 51px;
        height: 51px;
        border-radius: 100px;
    }
`