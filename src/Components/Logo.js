import styled from "styled-components"

export default function Logo(){
    return (
        <Img src="/assets/logo.png" alt="logo" />
    )
}

const Img = styled.img`
    width: 160px;
    margin-bottom: 30px;
`