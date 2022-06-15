import styled,{css, keyframes} from "styled-components";

let StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

let StyledInput = styled.input`
  width: ${({name})=>name == "Title"? "300px":"1000px"};
  height: ${({name})=>name == "Description"? "80px":"30px"};
  border-radius: 30px;
  border: .5px solid rgb(133, 215, 218);
  font-size: ${({name})=>name == "Description"? "25px":"20px"};
  padding: 20px;
  outline: none;
  ${({blur})=>blur && css`
    box-shadow: 0px 0px 5px rgb(133, 215, 218);
  `}
`

let StyledP = styled.p`
  font-size: 30px;
  text-align: center;
  letter-spacing: 8px;
`

let StyledError = styled.div`
  color: rgb(240, 101, 101);
  height: 20px;
  position: realtive;
`

let drop = keyframes`
0%{
  opacity:0;
  top: -20px;
}
99%{
  opacity: 1;
}
100%{
  opacity: 1;
  top: 0px;
}
`

export {
  StyledInput,StyledInputContainer,StyledP,StyledError
}
