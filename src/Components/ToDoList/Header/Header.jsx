import {StyledHeader, StyledThemeToogle, StyledLangBar, StyledLang} from "./HeaderStyles";


export default function Header({setTheme, theme, lang, setLang}){
  return <StyledHeader theme={theme}>
          <StyledThemeToogle onClick={()=>setTheme(prev=>prev == "bright"?"dark":"bright")} theme={theme} />
            todos
        <LangBar theme={theme} lang={lang} setLang={setLang}/>
         </StyledHeader>

}

function LangBar(props){
  return <StyledLangBar theme={props.theme}>
            <StyledLang theme={props.theme} style={{borderRight: `1px solid ${props.theme == "dark"?"red":"aqua"}`}} onClick={()=>{if(props.lang == "en"){return};props.setLang("en")}} >Eng</StyledLang>
            <StyledLang theme={props.theme} onClick={()=>{if(props.lang == "ru"){return};props.setLang("ru")}} >Ru</StyledLang>
         </StyledLangBar>

}
