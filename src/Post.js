import React,{useState,useEffect} from 'react'

import { storage, db } from "./firebase";
//削除ボタンの実装
const DeleteInputData = ({id,image,text,timestamp}) => {
        db.collection("posts").doc(id).delete();
        console.log(DeleteInputData);
    };
//データが渡ってきますよ=props(省略した)
const Post = ({text,image,timestamp}) => {
    return (
        <div className="postdate">
            {/* 記述1.テキスト情報が渡ってくる */}
            <div>{text}</div>
            {/* 記述2.画像表示 imgタグを使う */}
            {/* 記述4.画像がある時だけ表示 */}
           {image ? (
            <div>
            <img src={image} alt="" width="200px" height="auto" />
            </div>
            ) : (
                <p style = {{color: "grey"}}>no images</p>
            )}
            {/* 記述3.日付を表示 注意！jsの形式に変換が必要！ */}
            <div className="timestamp">{new Date(timestamp?.toDate()).toLocaleString()}</div>
            <button onClick={DeleteInputData}>削除</button>
        </div>
    );
};
export default Post;