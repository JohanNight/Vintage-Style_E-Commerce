import React from 'react'
import styled from 'styled-components'


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Pinterest, Room, Phone, MailOutline } from '@mui/icons-material';
import {mobile} from "../Responsive"


const Container = styled.div`
    display:flex;

    ${mobile({
       flexDirection:"column"
    })}
`

const Left= styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;

`

const Logo =styled.h1`


`

const Desc = styled.p`
    margin:20px 0px;
`

const SocialContainer = styled.div`
    display:flex;
`

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    cursor:pointer;
    color:white;
    background-color:#${props => props.color};

    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`

const Center = styled.div`
    flex:1;
    padding:20px;

    ${mobile({
        display:"none"
    })}
`

const Title= styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style:none;
    display:flex;
    flex-wrap: wrap;

`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex:1;
    padding:20px;
`

const ContactItem = styled.div`
margin-bottom: 20px;
display:flex;
align-items:center;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                VINTAGE STYLE
            </Logo>
            <Desc>
                Rediscover timeless elegance with our vintage style collection. Where classic charm meets modern sophistication.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                   <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men's Fashion</ListItem>
                <ListItem>Women's Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wish List</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>

            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>
                Phase 12-B, PasungBuaya, Imus, Cavite Philippines
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>
                +63 111 222 444 4
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> sampleemail.com.ph
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer