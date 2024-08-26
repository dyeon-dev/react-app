// 입략 컴포넌트 추출하기 
const scalesNames = {
    c:"섭씨",
    f:"화씨"
};

function TemperatureInput(props) {
    const handleChange = (event) => {
        // 변경 전: setTemperature(event.target.value)
        // 공통된 상위 컴포넌트로 올려서 공유
        props.onTemperatureChange(event.target.value); // 온도값이 변경되었을 때마다 onTemperatureChange 함수를 호출하여 상위 컴포넌트로 변경된 값을 전달
    };

    return (
        <fieldset>
            <legend>
                온도 입력(단위: {scalesNames[props.scale]})
            </legend>
            <input value={props.temperature} onChange={handleChange}/>
        </fieldset>
    )
}
export default TemperatureInput