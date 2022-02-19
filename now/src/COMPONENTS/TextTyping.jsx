import React, { useState, useEffect} from 'react'
import "./font.css"

export default function TextTyping() {
    const content = "안녕하세요.\n개발자 지망생 정재윤입니다.\n\n\n서버를 직접 구축할 필요 없이 git만으로 간편하게 페이지를 만들 수 있다니 설레네요!"
    // const content = props.children;

    // 변화하는 모든 값에 대한 hook지정
    const [txt, setTxt] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTxt(txt + content[count]);
            setCount(count + 1); 
        },100);

        if (count === content.length){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    })

    return (
        <p style={{textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "KyoboHand",  marginTop: '25%' ,marginBottom:'25%'}}>{txt}</p>
    )
}



        // <html>
        //     <head>
        //         <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        //     </head>
        //     <body>
        //         <div style={{ textAlign: "center" }}>
        //             <div>
        //                 <p><h1>now 프로젝트</h1></p>
        //                 <p>사람들의 시간을 줄여주는 서비스를 개발을 위한 아이디어 플랫폼</p>
        //                 <br />
        //                 <p><h3>Renewal Project : </h3></p>
        //                 <div style={{ marginLeft: "auto", marginRight: "auto", display: "block", width: "20%", backgroundColor: "purple", color: "white" }}>Recommendation about Random Dating</div>
        //             </div>
        //             <br/>
        //             <div>
        //                 <p><h3>New Project : <small style={{ color: "gray" }}>planning</small></h3></p>
        //                 <div style={{ marginLeft: "auto", marginRight: "auto", display: "block", width: "20%", backgroundColor: "skyblue", color: "white" }}>Assistant for University Assignment</div>
        //                 <div style={{ marginLeft: "auto", marginRight: "auto", display: "block", width: "20%", backgroundColor: "orange", color: "black" }}>Automatic Investment</div>
        //             </div>
        //         </div>
        //     </body>
        // </html>