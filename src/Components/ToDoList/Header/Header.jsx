import {StyledHeader, StyledThemeToogle, StyledLangBar, StyledLang} from "./HeaderStyles";


export default function Header({setTheme, theme}){

  return <StyledHeader theme={theme}>
          <StyledThemeToogle onClick={()=>setTheme(prev=>prev == "bright"?"dark":"bright")} theme={theme} />
            todos
          <LangBar theme={theme} />
         </StyledHeader>

}

function LangBar(props){
  return <StyledLangBar theme={props.theme}>
            <StyledLang theme={props.theme} style={{borderRight: `1px solid ${props.theme == "dark"?"red":"aqua"}`}}>Eng</StyledLang>
            <StyledLang theme={props.theme}>Ru</StyledLang>
         </StyledLangBar>

}
