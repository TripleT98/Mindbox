import styled from "styled-components";

let StyledToDoList = styled.div`
  width: 1300px;
  height: 100vh;
  position: relative;
  overflow: hidden;
  @media(max-width: 1024px){
    width: 900px;
  }
}
`

let StyledHr = styled.hr`
    border: none;
    color: rgb(207, 238, 237);
    background-color: rgb(207, 238, 237);
    height: 2px;
    position: relative;
`

export {
  StyledToDoList, StyledHr
}
