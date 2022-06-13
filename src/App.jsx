//styled components
import {Global,StyledApp} from "./AppStyles";
//components
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
  return (
    <StyledApp>
      <Global/>
      <ToDoList/>
    </StyledApp>
  );
}

export default App;
