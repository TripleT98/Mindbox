//styled components
import {StyledList} from "./ListStyles";
//react HOC's
import {memo} from "react";
//components
import ToDo from "./ToDo/ToDo";

function List({list}){
  
  return <StyledList>
            {list.map((e,i)=><ToDo key={e.id} {...e}/>)}
         </StyledList>

}

List = memo(List);
export default List;
