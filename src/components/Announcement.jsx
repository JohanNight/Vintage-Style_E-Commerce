import styled from "styled-components"
import { mobile } from "../Responsive"

const Container = styled.div`
    background-color:#709F9D;
    height:30px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    font-weight: 500px;
    letter-spacing:2px;

    ${mobile({
      fontSize:"12px"
    })}

`


const Announcement = () => {
  return (
    <Container>Super Deal!! Free Shipping on Orders Over $50</Container>
  )
}

export default Announcement