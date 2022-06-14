import styled, {css} from "styled-components";

let StyledButton = styled.button`
  width: 80px;
  height: 45px;
  margin: 20px 0px;
  background-color: rgb(55, 233, 110);
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  transition-duration: .4s;
  ${({isError})=>isError?css`
    opacity: .4;
    cursor: default;
  `:css`
  &:hover{
    background-color: white;
    color: rgb(55, 233, 110);
    cursor: pointer;
    border: 3px solid rgb(55, 233, 110);
  }
  `}
`

export {
  StyledButton
}
