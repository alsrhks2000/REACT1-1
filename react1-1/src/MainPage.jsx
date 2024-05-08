import { useState  } from "react";
import WarningBanner from "./WarningBanner";

export default function MainPage(props){
    const [showWarning,setshowWarning]=useState(false)

    const handleToggleClick = ()=>{
        setshowWarning(preShowWarning=>!preShowWarning)
    }
    return(
        <div>
        <WarningBanner warning = {showWarning}/>
    <button onClick = {handleToggleClick}>
    {showWarning ? '감추기':'보이기'}
    </button>
    </div>

    )
}