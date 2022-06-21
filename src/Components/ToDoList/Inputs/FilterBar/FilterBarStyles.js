import styled,{css} from "styled-components";

let StyledFilterBar = styled.div`
  margin-right: ${({flag})=>flag && "65px"};
  height: 30px;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  align-items: center;
  & div:nth-last-child(1){
  }
  transform: translateX(5%);
  padding: 10px 0px 20px 0px;
  @media(max-width:660px){
    font-size: 15px;
    gap: 10px;
  }
  @media(max-width:450px){
    font-size: 12px;
    gap: 0px;
  }
`

let StyledButton = styled.div`
  border: 1px solid transparent;
  border-color: ${({filterStatus})=>filterStatus && "rgb(133, 215, 218)"};
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

let StyledTimeInput = styled.input`
  margin: 0 0 0 10px;
  width: 50px;
  height: 31px;
  outline: none;
  border: .5px solid rgb(133, 215, 218);
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  color: rgb(92, 92, 92);
  @media(max-width:450px){
    width: 30px;
    height: 20px;
    margin: 0 20px 0 10px;
  }
`

let StyledTimeFilter = styled.div`
  padding-bottom: 2px;
`

export {
  StyledFilterBar, StyledButton, StyledTimeFilter, StyledTimeInput
}
