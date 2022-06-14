import styled, {css} from "styled-components";

let StyledDone = styled.div`
  width: 40px;
  height: 40px;
  grid-area: done;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 10px;
  transition-duration: .5s;
  ${({isDone})=>isDone?css`
      background-color: rgba(55, 233, 110, .3);
    `:css`
      &:hover{
        background-color: rgb(55, 233, 110);
      }
      cursor: pointer;
      background-color: rgb(222, 222, 222);
    `}
`

export {
  StyledDone
}
