import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
align-items:center;
flex-direction:row;
justify-content:space-between;
padding:25px 25px 0 25px;
width:100%;
`
const Logo = styled.Image`
width:20px;
height:40px;
`
const Menu = styled.Text`
font-size:18px;
color:#fff
letter-spacing:0.1px;
`

const MenuTag = styled.Text`
color:#fff;
padding:0 8px;
font-size:13px;
`
const Header = ()=> {
    return (
        <Container>
            <Logo resizeMode="contain" source={require('../assets/logo.png')} ></Logo>
            <Menu>Series</Menu>
            <Menu>Film</Menu>
            <Menu>My List</Menu>
        </Container>
    )
}

export default Header;