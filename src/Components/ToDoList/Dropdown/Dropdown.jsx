//styled components
import {StyledDropdown, StyledArrow} from "./DropdownStyles";
//components
import FilterBar from "./../Inputs/FilterBar/FilterBar";
//react hooks
import {useState} from "react";
import ReactDOM from "react-dom";

export default function Dropdown(){

  let [isOpen, open] = useState(false);

  return <StyledDropdown isOpen={isOpen}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "start"}}><FilterBar lilWindowState/></div>
            <StyledArrow onClick={()=>{open(!isOpen)}} isOpen={isOpen} main={true}/>
         </StyledDropdown>
}
