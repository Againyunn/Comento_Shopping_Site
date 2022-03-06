import React from 'react'

//메인페이지에서 각 상품군 선택 시 hover 적용
export default function SelectThemeActive(selectedTheme, theme, imgLocation) {    //매개변수:  useState에 정의된 상태값, theme 종류
    // 기본적으로 white 배경 적용
    let result = {backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL+imgLocation})`,color: "white", paddingTop:"20px",marginBottom:"5px", marginRight: "5px", marginLeft:"5px" ,opacity:"0.85",borderRadius: "10px",top:"10%",position:"relative", float: "left", width: "30%", height:"50px", textAlign: "center"};

    // 방한용품 선택 시 : hover 작동 시, 회색으로 변경
    if (selectedTheme === theme) {
      result.backgroundImage= ` linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${process.env.PUBLIC_URL+imgLocation})`
    }
    return result;
}
