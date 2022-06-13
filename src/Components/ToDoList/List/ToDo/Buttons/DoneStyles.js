import styled from "styled-components";

let StyledDone = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  grid-area: done;
  border-radius: 50%;
  background-color: rgb(222, 222, 222);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 10px;
  transition-duration: .5s;
  &:hover{
    background-color: rgb(55, 233, 110);
  }
`

export {
  StyledDone
}
