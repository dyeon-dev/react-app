import React, {useState } from 'react'

export default function StsCall_01(props) {
    const [result, setResult] = useState("Ready")
    
    function fetch_exam(){
        const url = "http://localhost:8080/hello";
        fetch(url)
        .then((response) => response.json()) //문자열을 배열로 변환
        .then((data)=>{
            setResult(data.message)
        })
    }
  return (
    <div>
        <button onClick={fetch_exam}>Click!</button>
        <h1>{result}</h1>
    </div>
  )
}
