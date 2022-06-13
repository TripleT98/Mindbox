import styled from "styled-components";

let StyledToDo = styled.div`
  width: 700px;
  height: max-content;
  background-color: white;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
  display: grid;
  grid-template-areas: "done title title delete"
                       "done date date delete";
`

let StyledDate = styled.div`
  grid-area: date;
  text-align: center;
`

let StyledTitle = styled.div`
  grid-area: title;
  text-align: center;
`

export {
  StyledToDo,StyledTitle,StyledDate
}
