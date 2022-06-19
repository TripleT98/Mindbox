//styled components
import {StyledDelete} from "./DeleteStyles";
//Context
import context from "./../../../context";
//react hooks
import {useContext} from "react";

export default function Delete({id, isDone}){

  let con = useContext(context)

  return <StyledDelete onClick={()=>{if(!isDone){con.removeToDo(id)}}} isDone={isDone} theme={con.theme}>
            {con.lang == "ru" ? "Удалить" : "Delete"}
         </StyledDelete>
}
