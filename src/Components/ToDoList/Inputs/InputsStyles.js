import styled from "styled-components";

let StyledInputs = styled.div`
  width: 100%;
  height: max-content;
  background-color: ${({theme})=>theme == "bright" ? "white" : "#373737"};
  transition-duration: .3s;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export {
  StyledInputs
}
