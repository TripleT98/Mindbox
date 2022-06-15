//styled component
import {StyledFilterBar,StyledButton} from "./FilterBarStyles";
//react hooks
import {useContext} from "react";
//context
import context from "./../../context";
// utils
import {enumObj} from "./../../../../utils";


export default function FilterBar(){

  let {filterStatus, filterIt, clearCompleted} = useContext(context);

  function filterHandler(e){
    let val = e.target.innerHTML;
    val = val.toLowerCase();
    filterIt(enumObj[val]);
  }

  return <StyledFilterBar>
            <StyledButton filterStatus={filterStatus == enumObj["all"]} onClick={filterHandler}>All</StyledButton>
            <StyledButton filterStatus={filterStatus == enumObj["active"]} onClick={filterHandler}>Active</StyledButton>
            <StyledButton filterStatus={filterStatus == enumObj["completed"]} onClick={filterHandler}>Completed</StyledButton>
            <StyledButton onClick={clearCompleted}>Clear completed</StyledButton>
         </StyledFilterBar>
}
