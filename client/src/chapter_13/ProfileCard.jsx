import Card from "./Card";
// Card 컴포넌트를 사용하여 title에 이름을 넣고 background에 녹색으로 설정했다.
function ProfileCard(props) {
    return (
        <Card title="Hello" backgroundColor="#4ea04e">
            <p>안녕하세요.</p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;