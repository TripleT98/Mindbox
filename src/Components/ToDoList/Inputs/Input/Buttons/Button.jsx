import {StyledButton} from "./ButtonStyles";
//react hooks
import {useContext, useRef} from "react";
//Context
import context from "./../../../context";
//utils
import {hashCode} from "./../../../../../utils";

export default function Button({title, text}){
  let ref = useRef(new Date().toLocaleDateString());
  let cont = useContext(context);

  function clickHandler(e){
    let id = hashCode(title);
    let todo = {
      title,text,isDone: false, date: ref.current, id:id,
    }
    cont.addToDo(todo);
  }

  return <StyledButton onClick={clickHandler}>
            Add
         </StyledButton>

}
