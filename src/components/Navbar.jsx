import React from 'react'
import { styled } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height:60px;
  /* border: 1px solid black; */
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display:flex;
  align-items: center;
  justify-content: space-between;
`;
const Left =styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  font-size: 18px;
`;
const  SearchContainer =styled.div`
  display: flex ;
  border: 0.5px solid grey;
  padding: 10px;
  margin-left: 15px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  width: 10vw;
`;
const Center =styled.div`
  flex: 1;  
  text-align: center;
`;
const Logo =styled.h1`
  font-weight: 800;
  letter-spacing: 5px;
`;
const Right =styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const MenuItems = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
           <SearchIcon style={{color:'grey',fontSize:'16px'}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>...SHOPIFY...</Logo>
        </Center>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>SignIn</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon style={{fontSize:'35px'}}/>
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
