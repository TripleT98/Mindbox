//styled components
import {StyledTimeFilter, StyledTimeInput} from "./FilterBarStyles";
//react hooks
import {useState, useContext} from "react";
//context
import context from "./../../context";

function TimeFilter(){

  let [val, setVal] = useState("");
  let [t, setT] = useState();

  let {setTimeFilter, lang} = useContext(context);

  function changeHandler(e){
    let str = e.target.value;
    if(str.length <= 4 && !isNaN(str)){
      clearTimeout(t);
      setVal(str);
      setT(setTimeout(()=>{setTimeFilter(str || 0)},1000));
    }
  }

  return <StyledTimeFilter>
           <span>
             {lang == "ru"?"Дни":"Days"}
           </span>
           <StyledTimeInput type="text" value={val} onChange={changeHandler}/>
         </StyledTimeFilter>
}

export default TimeFilter;
