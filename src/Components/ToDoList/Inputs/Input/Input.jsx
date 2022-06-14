//styled components
import {StyledInput,StyledInputContainer,StyledP, StyledError} from "./InputStyles";
//react hooks, HOC's
import {memo} from "react";

function Input({value, handler, name, blur, switchBlur, visited, visit, validators, errorM, setErrorM}){

  function validate(str){
    let isValid;
    for(let i = 0; i < validators.length; i++){
      isValid = validators[i](str);
      if(typeof isValid == "string"){
        setErrorM(isValid);
        break;
      }
      setErrorM("");
    }
  }

  function inputHandler(e){
    let val = e.target.value;
    if(val.length == 1){
      val = val.toUpperCase();
    }
    handler(val);
    if(visited){
      validate(val);
    }
  }

  return <StyledInputContainer>
            <StyledP>{name}</StyledP>
            <StyledInput name={name} type="text" value={value} onChange={inputHandler} onBlur={(e)=>{switchBlur(!blur);validate(e.target.value)}} onFocus={()=>{if(!visited){visit(true)};switchBlur(!blur)}} blur={blur}/>
            <StyledError>{!visited || errorM}</StyledError>
         </StyledInputContainer>

}

Input = memo(Input);
export default Input;
