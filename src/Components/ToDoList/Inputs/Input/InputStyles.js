import styled from "styled-components";

let StyledInputContainer = styled.div`
`

let StyledInput = styled.input`
  width: ${({name})=>name == "Title"? "300px":"1000px"};
  height: ${({name})=>name == "Description"? "100px":"50px"};
  border-radius: 30px;
  border: .5px solid rgb(133, 215, 218);
  font-size: ${({name})=>name == "Description"? "25px":"20px"};
  padding: 20px;
  outline: none;
  &:hover{
    box-shadow: 0px 0px 5px rgb(133, 215, 218);
  }
`

let StyledP = styled.p`
  font-size: 30px;
  margin: 10px;
  text-align: center;
`

export {
  StyledInput,StyledInputContainer,StyledP
}
