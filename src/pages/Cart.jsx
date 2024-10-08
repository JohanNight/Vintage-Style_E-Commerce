import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import T_shirt1 from "../assets/images/Men's Lightweight Jackets(9).jpg"
import T_shirt2 from "../assets/images/Vintage Classic Casual Light Jacket – Barber Clips.jpg"
import { Add, Remove } from "@mui/icons-material"

import { mobile } from "../Responsive"


const Container = styled.div`
`

const Wrapper = styled.div`
    padding:20px;
    ${mobile({
        padding:"10px"

    })}
`

const Title = styled.h1`
    font-weight:300;
    text-align:center;
`

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`

const TopButton = styled.button`
    padding:10px;
    font-weight: 600;
    cursor:pointer;

    border: ${props=>props.type ==="filled" && "none"};
    background-color: ${props => props.type === "filled" ? "#E0A370" : "transparent"};
    color: ${props => props.type == "filled" && "#FCFBF4"};
`
const TopTexts = styled.div`
${mobile({
    display:"none"

})}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor:pointer;
    margin:0px 10px;
`

const Bottom = styled.div`
    display:flex;
    justify-content:space-between;

    ${mobile({
       flexDirection: "column"

    })}
`

const Info = styled.div`
    flex:3;
`

const Product = styled.div`
    display:flex;
    justify-content:space-between;

    ${mobile({
        flexDirection: "column"
 
     })}
`

const ProductDetail = styled.div`
    flex:2;
    display:flex
`

const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=> props.color};
`

const ProductSize = styled.span``



const PriceDetail = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`
const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
    border: 1px solid #709F9D;
    padding: 5px 15px;
    border-radius:10px;

    ${mobile({
        margin: "5px 15px"
 
     })}
`
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:300px;
    ${mobile({
        marginBottom:"10px"
 
     })}
`

const Image= styled.img`
    width:200px;
`

const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height:1px;

`

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;
`

const SummaryTitle = styled.h1`
    font-weight:200;
`

const SummaryItem = styled.div`
margin: 30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size:${props=>props.type === "total" && "24px"};

`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    padding:10px;
    width:100%;
    background-color: #709F9D;
    border:none;
    color:#FCFBF4;
    font-weight:600;

    &: active{
        background-color:#567D89;
    }
`
const Cart = () => {
  return (
    <Container>
       <Navbar/>
       <Announcement/>
       <Wrapper>
            <Title>YOUR BAG </Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                <TopButton type="filled">Check Out Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={T_shirt1}/>
                            <Details>
                                <ProductName><b>Product:</b>Men's Lightweight Jackets</ProductName>
                                <ProductId><b>Id:</b>07152024</ProductId>
                                <ProductColor color="#14452F"/>
                                <ProductSize><b>Size:</b>L</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                           <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                           </ProductAmountContainer>
                           <ProductPrice>Php 600</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src={T_shirt2}/>
                            <Details>
                                <ProductName><b>Product:</b>Vintage Classic Casual Light Jacket</ProductName>
                                <ProductId><b>Id:</b>07152024</ProductId>
                                <ProductColor color="#4d2d18"/>
                                <ProductSize><b>Size:</b>L</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                           <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                           </ProductAmountContainer>
                           <ProductPrice>Php 660</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>Php 1260</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Fee</SummaryItemText>
                        <SummaryItemPrice>Php 30</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>Php -100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>Php 1260</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
       </Wrapper>
       <Footer/>
    </Container>
  )
}

export default Cart