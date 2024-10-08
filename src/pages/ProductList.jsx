import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement  from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import { mobile } from '../Responsive'
import { WidthFull } from '@mui/icons-material'

const Container = styled.div`
    
`

const Title = styled.h1`
    margin:20px;
`

const FilterContainer = styled.div`
    display:flex;
    justify-content: space-between;
`

const Filter = styled.div`
margin:20px;
${mobile({
    witdth:"0px 20px", display:"flex", flexDirection:"column"
})}
`

const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
    ${mobile({
        marginRight:"0px"
    })}
`

const Select = styled.select`
    padding:10px;
    margin-right:20px;
    ${mobile({
        margin:"10px 0px"
    })}
`

const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Men's Shirts</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>
                        Black
                    </Option>
                    <Option>
                        White
                    </Option>
                    <Option>
                        Gray
                    </Option>
                    <Option>
                       Red
                    </Option>
                    <Option>
                        Blue
                    </Option>
                    <Option>
                        Yellow
                    </Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>
                        Xs
                    </Option>
                    <Option>
                       Sm
                    </Option>
                    <Option>
                        M
                    </Option>
                    <Option>
                       L
                    </Option>
                    <Option>
                        XL
                    </Option>
                    <Option>
                        2Xl
                    </Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sorts Products:</FilterText>
                <Select>
                    <Option  selected>
                       Newest
                    </Option>
                    <Option>
                        Price (Asc)
                    </Option>
                    <Option>
                        Price (Desc)
                    </Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList