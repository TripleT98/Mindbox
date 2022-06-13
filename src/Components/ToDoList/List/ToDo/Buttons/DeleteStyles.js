import styled from "styled-components";

let StyledDelete = styled.div`
  cursor: pointer;
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
  &:hover{
    color: rgb(238, 75, 75);
    border: 3px solid rgb(238, 75, 75);
    background-color: white;
  }
`

export {
  StyledDelete
}
