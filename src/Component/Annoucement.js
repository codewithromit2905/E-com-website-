import styled from "styled-components";


const Containr=styled.div`
  height: 30px;
  background-color: teal;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

const Annoucemnet = () => {
  return (
      <Containr>Super Deal! free shipping on order over 50$</Containr>

  )
}

export default Annoucemnet