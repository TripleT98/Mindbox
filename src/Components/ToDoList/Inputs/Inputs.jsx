import {StyledInputs} from "./InputsStyles";
//components
import Input from "./Input/Input";
import Button from "./Input/Buttons/Button";
//react hooks
import {useState} from "react";


export default function Inputs(){

  let [title, setTitle] = useState("");
  let [text, setText] = useState("");

  function clear(){
    setTitle("");
    setText("");
  }

  return <StyledInputs>
            <Input name="Title" value={title} handler={setTitle}/>
            <Input name="Description" value={text} handler={setText}/>
            <Button title={title} text={text} clear={clear}/>
         </StyledInputs>

}
