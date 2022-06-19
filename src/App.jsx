//styled components
import {Global,StyledApp} from "./AppStyles";
//components
import ToDoList from "./Components/ToDoList/ToDoList";
//react hooks
import {useState} from "react";

function App() {

  let [theme, setTheme] = useState("bright");
  let [lang, setLang] = useState("en");

  return (
    <StyledApp theme={theme}>
      <Global/>
      <ToDoList theme={theme} setTheme={setTheme} lang={lang} setLang={setLang}/>
    </StyledApp>
  );
}

export default App;
