import axios from 'axios'
import React, { useEffect, useState } from 'react'

//상품 상세보기 페이지에서 Product Detail 관련 정보 API호출 및 반환하는 컴포넌트
export default function ThisPageProduct(productId) {    //가져올 Product의 ID값
    //상태 값 지정
    const [allReviews, setAllReviews] = useState('')

    //API 받아오기
    useEffect( ()=>{
        //JSON 데이터 호출
           axios.get('https://af713111-3b81-45bd-b1a1-fccceb174d27.mock.pstmn.io/ProductPage/')
           .then(Response => {
                setAllReviews(Response.data.reviews)
           })
           .catch((Error) =>{
               console.log(Error);
           })
       },[setAllReviews])
   
    //데이터 추출
    let thisReview = [];

    //현재 보고있는 상품의 리뷰만 필터링
    for (var j = 0; j < allReviews.length; j++) {
        // console.log('allReviews',allReviews[j].id)

        if (productId == allReviews[j].id) {
            // console.log('checked productId', productId);
            // console.log('checked allReviews',allReviews[j].id)
        thisReview.push(allReviews[j]);
        }
    }
  
    return thisReview;
}
