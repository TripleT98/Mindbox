//styled components
import {StyledToDo,StyledTitle,StyledDate} from "./ToDoStyles";
//components
import Delete from "./Buttons/Delete";
import Done from "./Buttons/Done";
//react hooks
import {useState} from "react";

export default function ToDo(props){

  let [deleteProcess, switchDelete] = useState(false);

  return <StyledToDo>
          <StyledTitle>Title:{props.title}</StyledTitle>

          <StyledDate>Date:{props.date}</StyledDate>

          <Done />
          <Delete id={props.id} />
         </StyledToDo>

}

/*
<p>Text:{props.text}</p>
<p>isDone:{props.isDone?"true":"false"}</p>
<p>id:{props.id}</p>

*/
