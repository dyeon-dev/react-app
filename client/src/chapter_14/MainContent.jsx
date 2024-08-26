import { useContext } from "react";
import ThemeContext from "./ThemeContext";

// ThemeContext로부터 현재 설정된 테마 값을 받아와 실제 화면의 콘텐츠를 렌더링하는 역할을 한다.

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext); // 테마 변경 버튼을 누를 경우 ThemeContext로부터 받은 toggleTheme() 함수를 호출하여ThemeContext 값을 변경하는 역할  

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContent;