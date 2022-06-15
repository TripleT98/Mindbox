//styled components
import {StyledList, StyledFallback} from "./ListStyles";
//react HOC's
import {memo} from "react";
//components
import ToDo from "./ToDo/ToDo";
//utils
import {enumObj} from "./../../../utils";

function List({list, filterStatus}){

  let {all, active, completed} = enumObj;

  if(filterStatus != all){
    switch (filterStatus){
      case active: list = list.filter((e,i)=>!e.isDone)
        break;
      case completed: list = list.filter((e,i)=>e.isDone)
        break;
    }
  }
  return <StyledList>
            {list.length != 0 ? list.map((e,i)=><ToDo key={e.id} {...e}/>):
            <StyledFallback>{filterStatus == 0?"U have no todos yet":"This category is empty"}</StyledFallback>}
         </StyledList>

}

List = memo(List);
export default List;
