import styled, {createGlobalStyle} from "styled-components";

let Global = createGlobalStyle`
*{
  padding: 0xp;
  margin: 0px;
  box-sizing: border-box;
}
`

let StyledApp = styled.div`
  display: flex;
  justify-content: center;
`

export {
  Global,
  StyledApp,
}
