import React, {useEffect, useMemo, useState} from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    // componentDidMount, componentDidUpdate와 비슷하게 작동한다.
    useEffect(() => {
        // 브라우저 API를 사용해서 document의 title을 업데이트한다. 
        document.title = `총 ${count}번 클릭`;
    })
    return (
        <div>
            <p>총 {count}번 클릭</p>
            <button onClick={()=> setCount(count+1)}>
                click!
            </button>
        </div>
    )

    
}
export default Counter;