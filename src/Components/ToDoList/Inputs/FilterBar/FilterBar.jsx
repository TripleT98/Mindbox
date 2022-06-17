//styled component
import {StyledFilterBar,StyledButton} from "./FilterBarStyles";
//components
import TimeFilter from "./TimeFilter";
//react hooks
import {useContext} from "react";
//context
import context from "./../../context";
// utils
import {enumObj} from "./../../../../utils";


export default function FilterBar(props){

  let {filterStatus, filterIt, clearCompleted, lilWindowState} = useContext(context);

  let flag;

  if((props.lilWindowState && lilWindowState) || (!props.lilWindowState && !lilWindowState)){
    flag = true;
  }else if(lilWindowState && !props.lilWindowState){
    flag = false;
  }

  function filterHandler(e){
    let val = e.target.innerHTML;
    val = val.toLowerCase();
    filterIt(enumObj[val]);
    e.stopPropagation();
  }

  return <StyledFilterBar>
            {flag && <><StyledButton filterStatus={filterStatus == enumObj["all"]} onClick={filterHandler}>All</StyledButton>
            <StyledButton filterStatus={filterStatus == enumObj["active"]} onClick={filterHandler}>Active</StyledButton>
            <StyledButton filterStatus={filterStatus == enumObj["completed"]} onClick={filterHandler}>Completed</StyledButton></>}
            {props.children}
            {flag && <><StyledButton onClick={clearCompleted}>Clear completed</StyledButton>
            <TimeFilter /></>}
         </StyledFilterBar>
}
