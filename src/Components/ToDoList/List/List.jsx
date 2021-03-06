//styled components
import {StyledList, StyledFallback} from "./ListStyles";
//react HOC's
import {memo} from "react";
//components
import ToDo from "./ToDo/ToDo";
//utils
import {enumObj, getMS} from "./../../../utils";

function List({list, filterStatus, timeFilter, theme, lang}){

  let {all, active, completed} = enumObj;

  if(timeFilter != 0){
    let date = new Date();
    date = date/1;
    let ms = getMS(timeFilter);
    list = list.filter((e,i)=> date - e.timestamp < ms);
  }

  if(filterStatus != all){
    switch (filterStatus){
      case active: list = list.filter((e,i)=>!e.isDone)
        break;
      case completed: list = list.filter((e,i)=>e.isDone)
        break;
    }
  }

  return <StyledList>
            {list.length != 0 ? list.map((e,i)=><ToDo key={e.id} {...e} theme={theme}/>):
            <StyledFallback>{filterStatus == 0? lang == "ru" ? "У вас еще нет заданий" : "U have no todos yet" : lang == "ru" ? "Эта категория пуста" : "This category is empty"}</StyledFallback>}
         </StyledList>

}

List = memo(List);
export default List;
