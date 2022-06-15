//styled components
import {StyledToDoList, StyledHr} from "./ToDoListStyles";
//components
import Header from "./Header/Header";
import Inputs from "./Inputs/Inputs";
import List from "./List/List";
import Footer from "./Footer/Footer";
//react hooks
import {useState, useEffect} from "react";
//Context
import Context from "./context";
//utils
import {checkId} from "./../../utils";




export default function ToDoList(){

  let [todoes, addToDo] = useState([]);
  let [filterStatus, filterIt] = useState(0);

  function addToDoHandler(todo){
    if(checkId(todoes,todo.id)){
      return false;
    };

    addToDo((prev)=>([todo,...prev]));
  }

  function removeToDoHandler(id){
    addToDo((prev)=>prev.filter((e,i)=>e.id == id?false:true));
  }

  function finishTask(id){
    addToDo((prev)=>prev.map((e,i)=>{if(e.id == id){e.isDone = true};return e}));
  }

  function clearCompletedHandler(){
    addToDo((prev)=>prev.filter((e,i)=>e.isDone?false:true));
  }

  return <StyledToDoList>
          <Context.Provider value={{
            addToDo: addToDoHandler,
            removeToDo: removeToDoHandler,
            finish: finishTask,
            filterStatus,filterIt,
            clearCompleted:clearCompletedHandler,
          }}>
            <Header />
            <Inputs/>
            <StyledHr/>
            <List list={todoes} filterStatus={filterStatus}/>
            <Footer />
          </Context.Provider>
         </StyledToDoList>

}
