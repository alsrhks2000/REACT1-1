import { useState } from "react"

const scaleName = {
    C : '섭씨',
    F : '화씨'
}

export default function TemperatureInput(props) {
    const [temperature, setTemperature] = useState('')
    const handleChange = (e) => {
        setTemperature(e.target.value)
    }

    return(
        <fieldset>
            <legend>섭씨 온도를 입력하세요(단위: {scaleName[props.scale]})</legend>
            <input type="number" value={temperature}
            onChange={handleChange} />
        </fieldset>
    )
}

function toCelsius(fahereheit) { //파씨 변환
    return(
        (fahereheit - 32) * 5/9
    )
}
function tofahereheit(Celsius) { //섭씨 변환
    return(
        (Celsius * 5/9) + 32 
    )
}