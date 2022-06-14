import {StyledInputs} from "./InputsStyles";
//components
import Input from "./Input/Input";
import Button from "./Input/Buttons/Button";
//react hooks
import {useState} from "react";
//validators
import {maxLength, minLength, isEmpty} from "./validators";


export default function Inputs(){
  let [titleBlur, switchTitleBlur] = useState(false);
  let [textBlur, switchTextBlur] = useState(false);

  let [isVisitedTitle, visitTitle] = useState(false);
  let [isVisitedText, visitText] = useState(false);

  let [title, setTitle] = useState("");
  let [text, setText] = useState("");

  let [titleError, setTitleError] = useState("");
  let [textError, setTextError] = useState("");

  function clear(){
    setTitle("");
    setText("");
  }

  return <StyledInputs>
            <Input name="Title" value={title} handler={setTitle} validators={[isEmpty, maxLength(30), minLength(5)]} blur={titleBlur} switchBlur={switchTitleBlur} visited={isVisitedTitle} visit={visitTitle} errorM={titleError} setErrorM={setTitleError} />
            <Input name="Description" value={text} handler={setText} validators={[maxLength(70)]} blur={textBlur} switchBlur={switchTextBlur} visited={isVisitedText} visit={visitText} errorM={textError} setErrorM={setTextError} />
            <Button title={title} text={text} clear={clear} isError={titleError.length !== 0 || textError.length !== 0}/>
         </StyledInputs>

}
