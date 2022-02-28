import React from 'react'
//alert 디자인 : sweetalert2 npm package 이용
//npm install --save sweetalert2 sweetalert2-react-content 명령어로 설치
import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content'


//사용자 지정 alert 디자인을 반환하는 component
export default function alertTheme(alertContent) {
  return (
    //디자인 적용된 alert 실행
    Swal.fire({
        text: alertContent,
        confirmButtonColor: '#CCCCCC'
        })
    );
}
