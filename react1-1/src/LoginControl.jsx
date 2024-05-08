import { useState } from "react"
import Greeting from "./Greeting.jsx"

export default function LoginControl(props){
    const [isLoggedin, setIsLoggedin]=useState(false)

    const handleLoginclick=()=>{
        setIsLoggedin(true)
    }
    const handleLogoutClick =()=>{
        setIsLoggedin(false)
    }
    let button
    if(isLoggedin){
        button = <LogoutButton onClick ={handleLogoutClick}/>
    }else{
        button = <LoginButton onClick ={handleLoginclick}/>
    }
    return(
        <div>
            <Greeting isLoggedin={isLoggedin}/>
            {button}
        </div>
    )
}


//아래에 함수를 위의div안에 ?<LogoutButton onClick = {handleLogoutClick}, ?<LoginButton onClick = {handleLoginClick}으로 넣어서 더 깔끔하게도 가능하다.

function LoginButton(props){
    return(
        <button onClick={props.onClick}>로그인</button>
    )
}
function LogoutButton(props){
    return(
        <button onClick={props.onClick}>로그아웃</button>
    )
}