import styled from "styled-components"

export default function SignButton({text}){
    return(
        <Button>{text}</Button>
    )
}

const Button = styled.div`
    background-color: none;
    color: #52b6ff;
    font-size: 14px;
    text-decoration: underline;
    
`

