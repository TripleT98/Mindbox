import styled, {css} from "styled-components";

let StyledDropdown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(207, 238, 237);
  height: 70px;
  padding-top: 15px;
  transition-duration: .5s;
  ${({isOpen})=>isOpen === true?css`

  `:css`
    margin-top: -45px;
  `}
`

let StyledArrow = styled.div`
  left: 50%;
  background-color: rgb(194, 194, 194);
  width: 30px;
  height: 20px;
  clip-path: polygon(10% 10%, 30% 10%, 50% 50%, 70% 10%, 90% 10%, 50% 90%, 10% 10%);
  transition-duration: .3s;
  &:hover{
    background-color: ${({theme})=>theme == "bright" ? "rgb(110, 192, 238)" : "rgb(238, 75, 75)"};
    cursor: pointer;
  }
  ${({isOpen})=>isOpen === true && css`
    transform: rotateX(180deg);
  `}
  grid-area: d;
  ${({main})=>main || css`
  @media(max-width: 615px){
    width: 20px;
    height: 15px;
  }`}
`

export {
  StyledDropdown, StyledArrow
}
