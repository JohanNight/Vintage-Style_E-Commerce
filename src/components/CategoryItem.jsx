import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive' 
import { width } from '@mui/system'

const Container = styled.div`
  flex:1;
  margin:3px;
  height:70vh;
  position:relative;
  `

const Image = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;

  ${mobile({
    height:"30vh",
  })}
`

const Info = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`
const Title = styled.h1`
 color:white;
margin-bottom: 20px;
`
const Button = styled.button`
  border:none;
  padding:10px;
  cursor:pointer;
  background-color:white;
  color:gray;
  font-weight:600;
`


const CategoryItem = ({item}) => {
  return (
    <Container>
       <Image src={item.img}/>
       <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
       </Info>
    </Container>
  )
}

export default CategoryItem