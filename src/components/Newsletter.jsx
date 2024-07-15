import styled from "styled-components"

import { Send } from "@mui/icons-material"
import {mobile} from "../Responsive"

const Container = styled.div`
    height:60vh;
    background-color:#E2D7A7;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`


const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;

    ${mobile({
        textAlign:"center",
        fontSize:"50px"
    })}
`

const Desc = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;

    ${mobile({
        textAlign:"center"
    })}
`

const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:#FCFBF4;
    display:flex;
    justify-content:space-between;
    border: 1px solid lightgray;

    ${mobile({
        width:"80%"
    })}
`

const Input = styled.input`
    border:none;
    flex:8;
    padding-left: 20px;
    font-size:16px;
`


const Button = styled.button`
    flex:1;
    border:none;
    background-color: #709F9D;
    cursor:pointer;
    color:#FCFBF4;

    &: active {
        background-color:#567D89;
    }
`
const Newsletter = () => {
  return (
    <Container>
        <Title>News Letter</Title>
        <Desc> Get timely updates from your favorite Vintage  Style products.</Desc>
        <InputContainer>
            <Input placeholder="Email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter