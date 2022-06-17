import styled from "styled-components";

let StyledHeader = styled.header`
  width: 100%;
  height: 10%;
  text-align: center;
  font-size: 70px;
  color: rgb(207, 238, 237);
  letter-spacing: 30px;
  transform: translateX(15px);
  @media(max-width: 1025px){
    font-size: 55px;
    height: 9%;
  }
  @media(max-height: 800px){
    font-size: 55px;
    height: 8%;
  }
  @media(max-width: 615px){
    font-size: 45px;
    height: 7%;
  }
  @media(max-width: 415px){
    font-size: 40px;
    height: 6%;
  }
`

export {
  StyledHeader
}
