//styled components
import {StyledDelete} from "./DeleteStyles";
//Context
import context from "./../../../context";
//react hooks
import {useContext} from "react";

export default function Delete({id}){

  let con = useContext(context)

  return <StyledDelete onClick={()=>{con.removeToDo(id)}}>
            Delete
         </StyledDelete>
}
