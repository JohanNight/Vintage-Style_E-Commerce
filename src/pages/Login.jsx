import styled from "styled-components"
import Vintage from '../assets/images/Vintage-Shirt.jpg'
import { mobile } from "../Responsive"

const Container = styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(rgba(224, 163, 112, 0.5), rgba(224, 163, 112, 0.5)), url(${Vintage}) no-repeat;
    background-size:cover;
    background-attachment: fixed;

    display:flex;
    align-items:center;
    justify-content:center;
`

const Wrapper = styled.div`
    width:25%;
    padding:20px;
    background-color:#FCFBF4;
    ${mobile({
        width:"50%"
    })}
`

const Title = styled.h1`
    font-size:24px;
    font-weight:300;    
`

const Form = styled.form`
    display:flex;
    flex-direction: column;

`

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0;
    padding:10px;
`

const Agreement = styled.span`
    font-size:12px;
    margin:20px 0px;
`

const Button = styled.button`
    width:40%;
    padding: 15px 20px;
    border:none;
    background-color: #709F9D;
    color:#FCFBF4;
    cursor:pointer;

    &: active{
        background-color:#567D89;
    }

    margin-bottom: 10px;

`
const Link = styled.a`
    margin: 5px 0px;
    font-size:12px;
    text-decoration: underline;
    cursor: pointer;

    &: hover{
        color:#0000FF;
    }
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="User Name"/>
                <Input placeholder="Password"/>
                <Button>LOGIN</Button>
                <Link>Forgot Password?</Link>
                <Link>CREATE NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login