//styled components
import {StyledDone} from "./DoneStyles";
//Context
import context from "./../../../context";
//react hooks
import {useContext} from "react";

export default function Done({id, isDone, title}){
  let cont = useContext(context)
  return <StyledDone onClick={()=>{if(!isDone){cont.finish(id)}}} isDone={isDone} role="done"/>
}
