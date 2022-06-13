//styled components
import {StyledInput,StyledInputContainer} from "./InputStyles";
//react hooks

export default function Input({value, handler}){

  function inputHandler(e){
    let val = e.target.value;
    handler(val);
  }

  return <StyledInputContainer>
            <StyledInput type="text" value={value} onChange={inputHandler}/>
         </StyledInputContainer>

}
