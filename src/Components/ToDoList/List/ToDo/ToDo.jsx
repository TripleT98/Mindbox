//styled components
import {StyledToDo,StyledTitle,StyledDate} from "./ToDoStyles";
//components
import Delete from "./Buttons/Delete";
import Done from "./Buttons/Done";
//react hooks and HOC's
import {useState, memo} from "react";

function ToDo(props){
  let [deleteProcess, switchDelete] = useState(false);

  return <StyledToDo isDone={props.isDone}>
          <StyledTitle isDone={props.isDone}>{props.title}</StyledTitle>

          <StyledDate isDone={props.isDone}>{props.date}</StyledDate>

          <Done id={props.id} isDone={props.isDone}/>
          <Delete id={props.id} isDone={props.isDone}/>
         </StyledToDo>

}

ToDo = memo(ToDo);
export default ToDo;
