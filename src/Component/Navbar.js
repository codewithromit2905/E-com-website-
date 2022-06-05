import React from 'react'
import styled from "styled-components";
import { useNavigate} from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: pink;

`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
flex:1;
display: flex;
align-items: center;

`
const Center = styled.div`
flex:1;
text-align: center;
`
const Right = styled.div`
flex:1;
display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 13px;
  

`
const Language = styled.div` 
   font-size: 14px;
   cursor: pointer;
`
// const Input = styled.div`

// `
const Logo = styled.div`
   font-weight: bold;
`

const SearchContainer = styled.div`
border: 1px solid black;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;

`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

`;



const Navbar = () => {
  let navigate=useNavigate()
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer><i className="fa-brands fa-searchengin"> </i></SearchContainer>
                </Left>
                <Center><Logo>Ronny Shop</Logo></Center>
                <Right>
                    <MenuItem    onClick={()=>{navigate("./Register")}} >  REGISTER  </MenuItem>
                    <MenuItem  onClick={()=>{navigate("./Login")}} >SIGN IN </MenuItem>
                    <i className="fa-solid fa-cart-plus"  ></i>
                </Right>


            </Wrapper>
        </Container>
    )
}

export default Navbar