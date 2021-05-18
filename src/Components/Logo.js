import styled from "styled-components"

export default function Logo(){
    return (
        <Img src="/assets/logo.png" alt="logo" />
    )
}

const Img = styled.img`
    width: 180px;
    margin-bottom: 30px;
    margin-top: 70px;
`