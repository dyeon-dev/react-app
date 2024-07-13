import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props)  {
    return (
        <ul>
            {/* id를 키값으로 사용 */}
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
            
            {/* 포맷팅된 문자열을 키값으로 사용 */}
            {students.map((student, index) => {
                return <li key={`student-id-$(student.id)`}>{student.name}</li>
            })}

            { /* 배열의 인덱스를 키값으로 사용(키를 명시적으로 넣어주지 않을 경우 기본적으로 이 인덱스를 키값으로 사용) - 배열에서 아이템의 순서가 바뀔 수 있는 경우에는 권장하지 않음 */}
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>
            })}
        </ul>
    )
}
export default AttendanceBook