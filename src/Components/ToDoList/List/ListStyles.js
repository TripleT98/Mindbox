import styled from "styled-components";

let StyledList = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{
    display: none;
  }
  max-height: calc(100vh - 428px - 80px);
  min-height: max-content;
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
