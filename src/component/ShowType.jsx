import React from 'react'

export default function ShowType(thisType, type) {
    // 기본적으로 white 배경 적용
    let result = { background: "white", float: "left", position: "relative", width: "50%", textAlign: "center", height: "30px", paddingTop: "10px", fontFamily: " Noto Sans CJK KR", fontStyle: "normal", fontSize: "16px", fontWeight: "normal" };

    // 작동 시, 회색으로 변경
    if (thisType === type) {
        result.fontWeight = "bold";
        result.background = "#EEEEEE";
    }

    return result;
  }


