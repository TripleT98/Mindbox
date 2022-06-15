import styled,{css} from "styled-components";

let StyledFilterBar = styled.div`
  position: absolute;
  width: 350px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  right: 150px;
  bottom: 10px;
`

let StyledButton = styled.div`
  border: 1px solid white;
  border-color: ${({filterStatus})=>filterStatus && "rgb(210, 210, 210)"};
  min-width: 50px;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  transition-duration: .3s;
  &:hover{
    cursor: pointer;
    border-color: rgb(210, 210, 210);
  }

`

export {
  StyledFilterBar, StyledButton
}
