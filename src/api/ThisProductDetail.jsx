import axios from 'axios'
import React, { useEffect, useState } from 'react'

//상품 상세보기 페이지에서 Product Detail 관련 정보 API호출 및 반환하는 컴포넌트
export default function ThisProductDetail(productId) { //가져올 Product의 ID값
    //상태 값 지정
    const [allProducts, setAllProducts] = useState('')

    //API 받아오기
    useEffect( ()=>{
        //JSON 데이터 호출 테스트
           axios.get('https://1cb3d0ee-9fbb-4263-a6df-4a788bce9eaf.mock.pstmn.io/ProductDetail/')
           .then(Response => {
               setAllProducts(Response.data.products)
   
            //    console.log("products",allProducts);
           })
           .catch((Error) =>{
               console.log(Error);
           })
       },[setAllProducts])

    // let thisProduct = ''
   
    // //데이터 추출
    // if (allProducts !== ''){
    //     thisProduct=allProducts.find(x => x.id == productId)
    // }

    let thisProduct = [];

        //현재 보고있는 상품의 정보만 필터링
        for (var j = 0; j < allProducts.length; j++) {
            // console.log('allReviews',allReviews[j].id)
    
            if (productId == allProducts[j].id) {
                // console.log('checked productId', productId);
                // console.log('checked allProducts',allProducts[j].id)
                thisProduct.push(allProducts[j]);
            }
        }
    
    // console.log('thisProduct',thisProduct)
  
    return thisProduct;
}
