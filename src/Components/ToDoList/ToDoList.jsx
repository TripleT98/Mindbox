//styled components
import {StyledToDoList, StyledHr} from "./ToDoListStyles";
//components
import Header from "./Header/Header";
import Inputs from "./Inputs/Inputs";
import List from "./List/List";
import Footer from "./Footer/Footer";
import Dropdown from "./Dropdown/Dropdown";
//react hooks
import {useState, useEffect} from "react";
//Context
import Context from "./context";
//utils
import {checkId} from "./../../utils";




export default function ToDoList(props){

  let [todoes, addToDo] = useState([]);
  let [filterStatus, filterIt] = useState(0);
  let [timeFilter, setTimeFilter] = useState(0);
  let [lilWindowState, setLilWindowState] = useState(false);

  useEffect(()=>{
    let arr = [];
    let length = localStorage.length;
    let key;
    for(let i = 0; i < length; i++){
      key = localStorage.key(i);
      arr.push(JSON.parse(localStorage.getItem(key)));
    }
    addToDo(arr);
    setLilWindowState(window.innerWidth < 590);
  },[]);

  useEffect(()=>{
    window.addEventListener("resize", lilWindowHandler);
    return ()=>window.removeEventListener("resize", lilWindowHandler);
  },[lilWindowState])

  function addToDoHandler(todo, sameIdErrorHandler){
    if(checkId(todoes,todo.id)){
      sameIdErrorHandler("Existing title");
      return false;
    };
    localStorage.setItem(todo.id, JSON.stringify(todo));
    addToDo((prev)=>([todo,...prev]));
  }

  function removeToDoHandler(id){
    localStorage.removeItem(id);
    addToDo((prev)=>prev.filter((e,i)=>e.id == id?false:true));
  }

  function finishTask(id){
    addToDo((prev)=>prev.map((e,i)=>{if(e.id == id){e.isDone = true;localStorage.removeItem(e.id);localStorage.setItem(e.id, JSON.stringify(e))};return e}));
  }

  function clearCompletedHandler(e){
    addToDo((prev)=>prev.filter((e,i)=>{if(e.isDone){localStorage.removeItem(e.id)};return e.isDone?false:true}));
    e.stopPropagation();
  }

  function lilWindowHandler(e){
    let iW = e.target.innerWidth;
      if(iW < 590 && !lilWindowState){
        setLilWindowState(true);
      }else if(iW > 590 && lilWindowState){
        setLilWindowState(false);
      }
  }

  return <StyledToDoList theme={props.theme}>
          <Context.Provider value={{
            addToDo: addToDoHandler,
            removeToDo: removeToDoHandler,
            finish: finishTask,
            filterStatus,filterIt,
            clearCompleted:clearCompletedHandler,
            setTimeFilter,
            lilWindowState,
            theme: props.theme,
            lang: props.lang,
          }}>
            {lilWindowState && <Dropdown theme={props.theme} />}
            <Header setTheme={props.setTheme} theme={props.theme} setLang={props.setLang} lang={props.lang}/>
            <Inputs theme={props.theme} lang={props.lang}/>
            <StyledHr theme={props.theme}/>
            <List list={todoes} filterStatus={filterStatus} timeFilter={timeFilter}/>
            <Footer theme={props.theme}/>
          </Context.Provider>
         </StyledToDoList>

}
