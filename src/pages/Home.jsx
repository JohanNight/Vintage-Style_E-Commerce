import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Announcement from '../components/Announcement'



const HomeContainer = styled.div`

    background-color: #E2D7A7;
    width:100vw;
    height:100vh;
`

const Home = () => {
  return (
    <HomeContainer>
        <Announcement/>
        <Navbar/>
    </HomeContainer>
  )
}

export default Home