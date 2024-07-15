import { Height, Search, ShoppingCart, ShoppingCartOutlined  } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import {mobile} from '../Responsive'



const Container = styled.div`
    height: 60px;
    background-color:#A16B56;

    ${mobile({
        height: "50px"
    })};

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    
    ${mobile({
        padding: "10px 0px"
    })};
`

const Left = styled.div`
   flex:1;
   display:flex;
   align-items: center;
`

const Language = styled.span`
    fonts-size:14px;
    cursor:pointer;
    ${mobile({
        display: "none"
    })};
`
const SearchContainer = styled.div`
    background-color:#FFFDD0;
    display:flex;
    align-items:center;
    padding:5px;
    margin-left:25px;
`
const Input = styled.input`
    border: none;
    background-color:#FFFDD0;


    &:focus{
        outline:none;
        border:none;
    }
    ${mobile({
       width: "45px"
    })};
`

const Center = styled.div`
   flex:1;
   text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({
        fontSize: "16px"
    })};
`


const Right = styled.div`
   flex:1;
   display:flex;
   justify-content:flex-end;
   align-items:center;
   ${mobile({flex:1, 
    justifyContent: "space-evenly"
})};
`

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({
        fontSize: "10px",
        marginLeft: "0px"
    })};
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <Language>
                    English
               </Language>
               <SearchContainer>
                       <Input placeholder='Search'/>
                        <Search style={{color:"black", fontSize:"16px"}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    Vintage Style
                </Logo>
            </Center>
            <Right>
               <MenuItem>
                 Register
               </MenuItem>
                <MenuItem>
                    Sign In
                </MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>    
    </Container>
  )
}

export default Navbar