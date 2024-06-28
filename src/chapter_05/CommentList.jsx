import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "aaa",
        comment: "hihi"
    },
    {
        name: "bbb",
        comment: "hihi"
    },
    {
        name: "ccc",
        comment: "hihi"
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    )
}
export default CommentList;