import styled, {css} from "styled-components";

let StyledDone = styled.div`
  width: 40px;
  height: 40px;
  grid-area: done;
  border-radius: 50%;
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
    @media(max-height: 800px){
      width: 33px;
      height: 33px;
    }
    @media(max-width: 415px){
      width: 27px;
      height: 27px;
    }
`

export {
  StyledDone
}
