import styled from "styled-components"

export default function Button({ text }){
    return (
        <StyledButton>{text}</StyledButton>
    )
}

const StyledButton = styled.button`
    width: 90%;
    height: 45px;
    background: #52b6ff;
    border-style: none;
    border-radius: 5px;
    color: #fff;
    font-size: 21px;
    margin-top: 3px;
    margin-bottom: 30px
`