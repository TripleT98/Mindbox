import {StyledButton} from "./ButtonStyles";
//react hooks
import {useContext, useRef} from "react";
//Context
import context from "./../../../context";
//utils
import {hashCode} from "./../../../../../utils";

export default function Button({title, text, clear, isError}){
  let ref = useRef(new Date().toLocaleDateString());
  let cont = useContext(context);
  function clickHandler(e){
    if(isError)return;
    let id = hashCode(title);
    let todo = {
      title,text,isDone: false, date: ref.current, id:id,
    }
    cont.addToDo(todo);
    clear();
  }

  return <StyledButton onClick={clickHandler} isError={isError}>
            Add
         </StyledButton>

}
