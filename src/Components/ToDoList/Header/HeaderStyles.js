import styled, {css} from "styled-components";

let StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: 10%;
  text-align: center;
  font-size: 70px;
  transition-duration: .3s;
  background-color: ${({theme})=>theme == "bright" ? "white" : "#373737"};
  color: rgb(207, 238, 237);
  letter-spacing: 30px;
  padding-left: 15px;
  @media(max-width: 1025px){
    font-size: 50px;
    height: 9%;
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

let StyledThemeToogle = styled.div`
  position: absolute;
  padding: 2px;
  left: 10px;
  top: 10px;
  width: 50px;
  height: 30px;
  border: 2px solid;
  border-color: ${({theme})=>theme == "dark"?"rgb(249, 58, 58)":"rgb(207, 238, 237)"};
  background-color: ${({theme})=>theme == "dark"?"rgb(64, 64, 64)":"white"};
  cursor: pointer;
  border-radius: 25px;
  &:before{
    content: '';
    height: 22px;
    position: absolute;
    left: ${({theme})=>theme == "dark"?"5%":"50%"};
    top: 2px;
    width: 22px;
    border-radius: 50%;
    background-color: ${({theme})=>theme == "dark"?"rgb(249, 58, 58)":"rgb(207, 238, 237)"};
    transition-duration: .5s;
  }
  @media(max-width: 415px){
    transform: scale(0.6);
  }
`

let StyledLangBar = styled.div`
  display: flex;
  position: absolute;
  justify-context: space-between;
  right: 10px;
  top: 10px;
  width: 100px;
  height: 30px;
  border: 2px solid;
  border-radius: 10px;
  border-color: ${({theme})=>theme == "dark"?"rgb(249, 58, 58)":"rgb(207, 238, 237)"};
  background-color: ${({theme})=>theme == "dark"?"rgb(64, 64, 64)":"white"};
  color: ${({theme})=>theme == "dark"?"white":"rgb(64, 64, 64)"};
  @media(max-width: 415px){
    right: -10px;
    transform: scale(0.6);
  }
`

let StyledLang = styled.div`
  font-size: 15px;
  letter-spacing: 2px;
  width: 50%;
  padding-top: 4px;
  text-align: center;
  transition-duration: .3s;
  &:hover{
    color: ${({theme})=>theme == "dark"?"red":"rgb(0, 209, 255)"};
  }
  cursor: pointer;
`

export {
  StyledHeader,StyledThemeToogle,StyledLangBar,StyledLang
}
