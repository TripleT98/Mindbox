//styled components
import {StyledInput,StyledInputContainer,StyledP} from "./InputStyles";
//react hooks

export default function Input({value, handler, name}){

  function inputHandler(e){
    let val = e.target.value;
    handler(val);
  }

  return <StyledInputContainer>
            <StyledP>{name}</StyledP>
            <StyledInput name={name} type="text" value={value} onChange={inputHandler} />
         </StyledInputContainer>

}
