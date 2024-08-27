import React, { useRef, useState } from 'react';

function YongdomCrud01(props) {
    //목록용
    const [dataList, setDataList] = useState([])
    //상세보기용
    const [dataDetail, setDataDetail] = useState([])

    function handleCreateClick(e){
        let ff = e.target
        const formData = new FormData(e.target);
        //<form>에 현재 입력된 값 추출하여 객체에 저장
        const data = Object.fromEntries(formData.entries());
        console.log("data=",data)//입력된값 출력
        ff.dt.value = "" //입력값 삭제
        ff.gumaek.value = "" //입력값 삭제
        ff.naeyong.value = "" //입력값 삭제
        ff.sayong.value = "" //입력값 삭제

        let url = 'http://localhost:8080/yongdons'
        fetch( url , {
            method: 'POST', //새로운값 추가시 POST
            body: JSON.stringify(data),//추가할객체
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    function handleListClick(e){
        let url = 'http://localhost:8080/yongdons'
        fetch( url )
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setDataList(json)
        });
    }
    function fetchOne(seq){
        let url = 'http://localhost:8080/yongdons/'+seq
        fetch( url )
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setDataDetail(json)
        });
    }
    function handleSubmit(e){
        e.preventDefault()

        handleCreateClick(e)
    }
    //업데이트용
    const [dataUpdate,setDataUpdate ] = useState({})
    //상세보기의 수정하기버튼
    let upf = useRef(0)//<form>에서 참조중

    function handleUpdateClick(e){
        upf.current.seq.value = dataDetail.seq
        upf.current.dt.value = dataDetail.dt
        upf.current.gubun.value = dataDetail.gubun
        upf.current.sayong.value = dataDetail.sayong
        upf.current.naeyong.value = dataDetail.naeyong
        upf.current.sudan.value = dataDetail.sudan
        upf.current.gumaek.value = dataDetail.gumaek
    }
    function handleDeleteClick(e){
        let url = 'http://localhost:8080/yongdons/'+dataDetail.seq
        fetch( url , {
            method: 'DELETE'
          })
            .then((response) => console.log(response))
    }
    function handleUpdateSubmit(e){
        e.preventDefault()

        let ff = e.target
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("data=",data)
        ff.dt.value = "" //입력값 삭제
        ff.gumaek.value = "" //입력값 삭제
        ff.naeyong.value = "" //입력값 삭제
        ff.sayong.value = "" //입력값 삭제

        let url = 'http://localhost:8080/yongdons'
        fetch( url , {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
        <>
        <div><h1>용돈관리</h1></div>
        <div>
            <form onSubmit={handleSubmit}>
                <label>날짜 : 
                    <input type='date' name='dt' required></input>
                </label><br></br>
                <label>구분 : 
                    <select name='gubun'  required>
                        <option>지출</option>
                        <option>수입</option>
                    </select>
                </label><br></br>
                <label>사용처 : 
                    <input type='text' name='sayong' required></input>
                </label><br></br>
                <label>내용 : 
                    <input type='text' name='naeyong' required></input>
                </label><br></br>
                <label>지불수단: 
                    <select name='sudan' required>
                        <option>현금</option>
                        <option>카드</option>
                    </select>
                </label><br></br>
                <label>금액 : 
                    <input type='number' name='gumaek' required></input>
                </label><br></br>
                <input type='submit' value='용돈등록'></input>
            </form>
        </div>
        <div>
            <button onClick={handleListClick}>목록</button>
        </div>
        <div>
            <table style={{width:"250px", border:"1px solid black"}}>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>금액</th>
                        <th>날짜</th>
                        <th>용도</th>
                    </tr>
                </thead>
                <tbody>
                { dataList.map((dt,index)=>{
                    return <tr key={index}>
                        <td>{dt.gubun}</td>
                        <td>{dt.gumaek}</td>
                        <td><a href="#" onClick={(e)=>{
                            e.preventDefault();

                            fetchOne(dt.seq)
                        }}>{dt.dt}</a></td>
                        <td>{dt.sayong}</td>
                        </tr>
                }) }
                </tbody>
                
            </table>
        </div>
        <div>
            <h3>상세보기</h3>
            <p>번호 : {dataDetail.seq}</p>
            <p>날짜 : {dataDetail.dt}</p>
            <p>구분 : {dataDetail.gubun}</p>
            <p>사용처 : {dataDetail.sayong}</p>
            <p>내용 : {dataDetail.naeyong}</p>
            <p>지불수단 : {dataDetail.sudan}</p>
            <p>금액 : {dataDetail.gumaek}</p>
            <button onClick={handleUpdateClick}>수정하기</button>
            <button onClick={handleDeleteClick}>삭제하기</button>
        </div>
        <div>
            <h2>수정하기화면</h2>
            <form ref={upf}  onSubmit={handleUpdateSubmit}>
                    <input type='hidden'  name='seq' ></input>
                <label>날짜 : 
                    <input type='date' name='dt' ></input>
                </label><br></br>
                <label>구분 : 
                    <select name='gubun' >
                        <option>지출</option>
                        <option>수입</option>
                    </select>
                </label><br></br>
                <label>사용처 : 
                    <input type='text' name='sayong' ></input>
                </label><br></br>
                <label>내용 : 
                    <input type='text' name='naeyong' ></input>
                </label><br></br>
                <label>지불수단: 
                    <select name='sudan'  >
                        <option>현금</option>
                        <option>카드</option>
                    </select>
                </label><br></br>
                <label>금액 : 
                    <input type='number' name='gumaek'  ></input>
                </label><br></br>
                <input type='submit' value='용돈수정'></input>
            </form>
        </div>

        </>
    );
}

export default YongdomCrud01;