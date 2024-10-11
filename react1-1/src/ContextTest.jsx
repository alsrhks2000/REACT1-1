const ThemeContext = React.createContext('light')

function App(){
    return (
        <ThemeContext.provider value='dark'>
            <Toolbar />
        </ThemeContext.provider>
    )
}

function Toolbar(){
    return (
        <div>
            <ThemeButton theme={props.theme} />
        </div>
    )
}

function ThemeButton(){
    return (
        <ThemeContext.Consumer>
            {value => <Butoon theme={value} />}
        </ThemeContext.Consumer>
    )
}