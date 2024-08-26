import React, { useState } from 'react';
function JsonExam01(props) {
    const[users, setUsers] = useState([])
    function fetch_exam(){
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
        .then((response) => response.json())//문자열을 배열로 변환
        .then((data) => {
            //원하는 코드
            setUsers(data)
        });
    }
    // fetch_exam()
    return (
        <div>
            <button onClick={fetch_exam}>Click!!</button>
            <h1> fetch() 연습 </h1>
            <div>{ users.map( (dt)=>{
                return <p>{dt.name}</p>
            } ) }</div>
        </div>
    );
}
export default JsonExam01;