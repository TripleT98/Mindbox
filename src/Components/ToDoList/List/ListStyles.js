import styled from "styled-components";

let StyledList = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  padding-top: 30px;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{
    display: none;
  }
  max-height: calc(100vh - 428px);
  min-height: max-content;
  @media(max-height: 800px){
    max-height: calc(100vh - 344px);
  }
  @media(max-height: 800px){
    max-height: calc(100vh - 344px);
  }
  @media(max-width: 615px){
    max-height: calc(100vh - 380px);
  }
  @media(max-width: 415px){
    max-height: calc(100vh - 350px);
  }
  @media(max-width: 300px){
    max-height: calc(100vh - 370px);
  }
`

let StyledFallback = styled.div`
  text-align: center;
  font-size: 40px;
  letter-spacing: 7px;
  height: 100px;
  color: rgb(97, 97, 97);
`

export {
  StyledList, StyledFallback
}
