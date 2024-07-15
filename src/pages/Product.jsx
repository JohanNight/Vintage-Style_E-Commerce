import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import Tshirt4 from "../assets/images/Summer Vintage Beach Vacation (13).jpg"
import { Add, Remove } from "@mui/icons-material"

import { mobile } from "../Responsive"

const Container = styled.div`
`

const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({
        padding:"10px",
        flexDirection:"column"
    })}
`


const ImageContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    width:100%;
    height:90vh;

    ${mobile({
        height:"40vh",

    })}
`

const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;

    ${mobile({
        padding:"10px"

    })}
`
const Title = styled.h1`
    font-weight:200;
`
const Desc = styled.p`
    margin:20px 0px;
    ${mobile({
        textAlign:"justify"

    })}

    `
const Price = styled.span`
    font-weight:100;
    font-size:40px;
`

const FilterContainer = styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    ${mobile({
        width:"100%"

    })}
`
const Filter = styled.div`
    display:flex;
    align-items:center;
    `

const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`


const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
` 

const FilterStyleOption = styled.option`` 

const FilterSizeOption = styled.option`` 


const AddContainer = styled.div`
    width:50%;

    display:flex;
    align-items:center;
    justify-content: space-between;

    ${mobile({
       width:"100%"

    })}
`

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius: 10px;
    border: 1px solid #567D89;
    display:flex;
    align-items:center;
    justify-content:center;
    
    margin:0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border:1px solid #567D89;
    background-color:#FCFBF4;
    cursor:pointer;
    font-weight:500;
    
    &: hover{
        background-color:#709F9D;

    }

    &: active{
        background-color:#567D89;

    }
`
const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src={Tshirt4}/>
            </ImageContainer>
            <InfoContainer>
                <Title> Summer Vintage Beach Vacation </Title>
                <Desc>Embrace sunny days with our 'Summer Vintage Beach Vacation' polo shirt. Featuring classic vintage style and breathable fabric, this shirt is perfect for seaside adventures and warm summer outings.</Desc>
                <Price>Php 200</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Design</FilterTitle>
                        <FilterSize>
                            <FilterStyleOption>Design 1</FilterStyleOption>
                            <FilterStyleOption>Design 2</FilterStyleOption>
                            <FilterStyleOption>Design 3</FilterStyleOption>
                        </FilterSize>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>Xs</FilterSizeOption>
                            <FilterSizeOption>Sm</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>2XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Add/>
                            <Amount>1</Amount>
                        <Remove/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product