//styled components
import {StyledToDo,StyledTitle,StyledDate,StyledDescription,StyledBlock,StyledMain} from "./ToDoStyles";
import {StyledArrow} from "./../../Dropdown/DropdownStyles";
//components
import Delete from "./Buttons/Delete";
import Done from "./Buttons/Done";
//react hooks and HOC's
import {useState, memo} from "react";

function ToDo(props){

  let [deleteProcess, switchDelete] = useState(false);
  let [isOpen, open] = useState();

  return <>
           <StyledToDo isDone={props.isDone} isOpen={isOpen}>
             <StyledMain>
              <StyledBlock width="15">
                <Done id={props.id} isDone={props.isDone}/>
              </StyledBlock>

              <StyledBlock width="65">
                <StyledTitle isDone={props.isDone}>{props.title}</StyledTitle>
                <StyledDate isDone={props.isDone}>{props.date}</StyledDate>
              </StyledBlock>

              <StyledBlock width="20">
                <Delete id={props.id} isDone={props.isDone}/>
              </StyledBlock>

              <StyledBlock width="10">
                <StyledArrow isOpen={isOpen} onClick={()=>open(!isOpen)}/>
              </StyledBlock>
            </StyledMain>
           </StyledToDo>
         </>

}

ToDo = memo(ToDo);
export default ToDo;

//{isOpen && <StyledDescription>{props.text}</StyledDescription>}
