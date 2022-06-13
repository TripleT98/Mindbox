import {StyledInputs} from "./InputsStyles";
//components
import Input from "./Input/Input";
import Button from "./Input/Buttons/Button";
//react hooks
import {useState} from "react";


export default function Inputs(){

  let [title, setTitle] = useState("");
  let [text, setText] = useState("");

  return <StyledInputs>
            <Input value={title} handler={setTitle}/>
            <Input value={text} handler={setText}/>
            <Button title={title} text={text}/>
         </StyledInputs>

}
