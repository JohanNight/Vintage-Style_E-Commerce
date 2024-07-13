import { Search, ShoppingCart, ShoppingCartOutlined  } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';




const Container = styled.div`
    height: 60px;
    background-color:#A16B56;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const Left = styled.div`
   flex:1;
   display:flex;
   align-items: center;
`

const Language = styled.span`
    fonts-size:14px;
    cursor:pointer;
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
`

const Center = styled.div`
   flex:1;
   text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
`


const Right = styled.div`
   flex:1;
   display:flex;
   justify-content:flex-end;
   align-items:center;
`

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
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
                       <Input/>
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