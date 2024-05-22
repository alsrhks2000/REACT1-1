import { useState } from "react";

export default function NameForm(){
    const [value,setValue]=useState('')

    const handlechange = (e)=>(
        setValue(e.target.value)
    )
    const HandleSubmit=(e)=>{
        alert(`입력한이름 : ${value}`)
        e.preventDefault()
    }
return(
    <form onSubmit={HandleSubmit}>
        <label>
            이름:
            <input type ="text" value={value} onChange={handlechange}/>
        </label>
        <button type="submit">제출</button>
    </form>
)
}