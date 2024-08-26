import React, { useState } from 'react';
function MemberCrudGui(props) {
    const [dataList, setDataList] = useState([])

    function handleCreateClick(e){
        let ff = e.target
        let data = {}
        data.memId = ff.memId.value
        data.pwd = ff.pwd.value
        data.name = ff.name.value

        ff.memId.value = "" //입력값 삭제
        ff.pwd.value = "" //입력값 삭제
        ff.name.value = "" //입력값 삭제

        let url = 'http://localhost:8080/members'
        fetch( url , {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    function handleListClick(e){
        let url = 'http://localhost:8080/members'
        fetch( url )
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setDataList(json)
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        handleCreateClick(e)
    }
    return (
        <>
        <div>
            <h1>회원관리</h1>
        </div>
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    회원 ID : 
                    <input name="memId"></input>
                </label><br></br>
                <label>
                    비밀번호 : 
                    <input type='password' name="pwd"></input>
                </label><br></br>
                <label>
                    회원 이름 : 
                    <input name="name"></input>
                </label><br></br>
                <input type='submit' value="회원등록"></input>
            </form>
        </div>
        <div>
        <ul style={{listStyle:"none"}}>
                { dataList.map((dt,index)=>{
                    return <li key={index}>{dt.memId} / {dt.name}</li>
                }) }
            </ul>
        </div>
        <div>
            <button onClick={handleListClick}>목록</button>
        </div>
        </>
    );
}
export default MemberCrudGui;