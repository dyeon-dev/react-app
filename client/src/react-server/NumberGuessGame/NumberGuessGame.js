import React, { useState } from 'react';
import GameHeader from './GameHeader';
import GameInput from './GameInput';
import GameResult from './GameResult';
import GameResultList from './GameResultList';

function NumberGuessGame(props) { 
 
    // //사용자입력숫자
    // const [userNum, setUserNum] = useState("")
    //정답 확인 메시지
    const [resultMsg, setResultMsg] = useState("")
    //정답메시지 배열
    const [resultMsgList, setResultMsgList] = useState([])

    //정답확인
    function checkNumber ( userNum ){
        const url = `http://localhost:8080/guess/${userNum}`;
        fetch(url)
        .then((response) => response.json()) //문자열을 배열로 변환
        .then((data)=>{
            setResultMsg(data.message)
        })
    }
    return (
        <div className='App'>
            <GameHeader />
            <GameInput 
                // userNum={userNum} 
                // setUserNum={setUserNum} 
                onNumberInput={checkNumber} />
            <GameResult resultMsg={resultMsg} />
            <GameResultList resultMsgList={resultMsgList}/>
        </div>
    );
}

export default NumberGuessGame;