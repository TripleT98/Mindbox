import styled, {css} from "styled-components";

let StyledDelete = styled.div`
  background-color: white;
  width: 60px;
  height: 50px;
  max-width: 100%;
  padding: 5px;
  color: rgb(238, 75, 75);
  background-color: ${({theme})=>theme == "bright" ? "white" : "#373737"};
  border: 2px solid rgb(238, 75, 75);
  border-radius: 10px;
  grid-area: delete;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: .4s;
  font-weight: 100;
  font-size: 18px;
  ${({isDone})=>isDone?css`
    display: none;
  `:css`
    &:hover{
      color: ${({theme})=>theme == "bright" ? "white" : "#373737"};
      background-color: rgb(238, 75, 75);
      cursor: pointer;
    }
  `}
  @media(max-height: 800px){
    font-size: 15px;
    height: 40px;
  }
  @media(max-width: 615px){
    font-size: 15px;
    height: 30px;
  }

`

export {
  StyledDelete
}
