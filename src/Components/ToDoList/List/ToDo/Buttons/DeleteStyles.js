import styled, {css} from "styled-components";

let StyledDelete = styled.div`
  background-color: white;
  color: rgb(238, 75, 75);
  background-color: white;
  border: 3px solid rgb(238, 75, 75);
  border-radius: 10px;
  grid-area: delete;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: .4s;
  font-weight: 100;
  ${({isDone})=>isDone?css`
    display: none;
  `:css`
    &:hover{
      color: white;
      background-color: rgb(238, 75, 75);
      cursor: pointer;
    }
  `}
`

export {
  StyledDelete
}
