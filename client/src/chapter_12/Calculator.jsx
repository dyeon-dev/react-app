// 상위 컴포넌트 

import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

// 물이 끓음 여부를 알려주는 컴포넌트 
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

// 온도 변환 함수 (섭씨온도와 화씨온도 값을 동기화)
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// 온도 변환 함수 호출하는 함수 (매개변수: 온도값, 변환하는 함수)
// tryConvert('abc', toCelsius) -> empty string 리턴
// tryConvert('10.22', toFahrenheit) -> '50.396' 리턴

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


function Calculator(props) {
    // 온도, 단위 각각 state로 각각 관리 
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            {/* 변환된 온도값과 단위를 props로 넣어준다.
            값이 변경되었을 때 업데이트하기 위한 함수를 onTemperatureChange에 넣어준다. */}
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;