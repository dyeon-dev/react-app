// 하위 컴포넌트를 감싸서 카드 형태로 보여주는 컴포넌트 
// 사용자의 프로필을 나타내는 ProfileCard 컴포넌트가 된다.
// Containment, Specialization
function Card(props) {
    const {title, backgroundColor, children} = props;

    return (
        <div
        style={{
            margin: 8,
            padding: 8,
            borderRadius: 8,
            boxShadow: "0px 0px 4px grey",
            backgroundColor: backgroundColor || "white",
        }}
        >
             {/* title, backgroud: Specialization */}
            {title && <h1>{title}</h1>}
             {/* children: Containment */}
            {children}
        </div>
    )
}

export default Card;