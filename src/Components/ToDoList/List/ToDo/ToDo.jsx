import {StyledToDo} from "./ToDoStyles";


export default function ToDo(props){

  return <StyledToDo>
          <p>Title:{props.title}</p>
          <p>Text:{props.text}</p>
          <p>Date:{props.date}</p>
          <p>isDone:{props.isDone?"true":"false"}</p>
         </StyledToDo>

}
