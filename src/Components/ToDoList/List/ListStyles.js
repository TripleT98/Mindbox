import styled from "styled-components";

let StyledList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{
    display: none;
  }
  height: calc(100vh - 428px - 110px);
`

export {
  StyledList
}
