import styled,{css} from "styled-components";

let StyledToDo = styled.div`
  width: 500px;
  height: 80px;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
  display: grid;
  grid-template-areas: "done title title delete"
                       "done date date delete";
  grid-template-columns: 10% 40% 35% 15%;
  font-size: 20px;
  ${({isDone})=>isDone && css`
    color: rgb(185, 185, 185);
    background-color: rgb(219, 219, 219);
  `}
`

let StyledDate = styled.div`
  grid-area: date;
  text-align: center;
  ${({isDone})=>isDone && css`
    text-decoration: line-through;
  `}
`

let StyledTitle = styled.div`
  grid-area: title;
  text-align: center;
  ${({isDone})=>isDone && css`
    text-decoration: line-through;
  `}
`

export {
  StyledToDo,StyledTitle,StyledDate
}
