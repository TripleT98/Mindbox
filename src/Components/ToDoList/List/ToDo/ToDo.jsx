//styled components
import {StyledToDo,StyledTitle,StyledDate} from "./ToDoStyles";
//components
import Delete from "./Buttons/Delete";
import Done from "./Buttons/Done";
//react hooks and HOC's
import {useState, memo} from "react";

function ToDo(props){

  let [deleteProcess, switchDelete] = useState(false);

  return <StyledToDo>
          <StyledTitle>{props.title}</StyledTitle>

          <StyledDate>{props.date}</StyledDate>

          <Done />
          <Delete id={props.id} />
         </StyledToDo>

}

ToDo = memo(ToDo);
export default ToDo;

/*
<p>Text:{props.text}</p>
<p>isDone:{props.isDone?"true":"false"}</p>
<p>id:{props.id}</p>

*/
