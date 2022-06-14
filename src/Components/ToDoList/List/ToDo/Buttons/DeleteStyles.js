import styled, {css} from "styled-components";

let StyledDelete = styled.div`
  background-color: white;
  color: white;
  background-color: rgb(238, 75, 75);
  border-radius: 10px;
  grid-area: delete;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: .4s;
  font-weight: 100;
  ${({isDone})=>isDone?css`
    background-color: rgba(238, 75, 75, .4);
  `:css`
    &:hover{
      color: rgb(238, 75, 75);
      border: 3px solid rgb(238, 75, 75);
      background-color: white;
      cursor: pointer;
    }
  `}
`

export {
  StyledDelete
}
