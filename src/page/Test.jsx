import React, { useEffect, useState } from 'react'
//API 테스트
import axios from 'axios'

export default function Test() {

    // const [test, setTest] = useState('테스트 전')
    const [allReviews, setAllReviews] = useState('')
    const [allProducts, setAllProducts] = useState('')
    
    let productId = 101

    useEffect( ()=>{
     //JSON 데이터 호출 테스트
        axios.get('https://1cb3d0ee-9fbb-4263-a6df-4a788bce9eaf.mock.pstmn.io/ProductDetail/')
        .then(Response => {
            setAllProducts(Response.data.products)
            setAllReviews(Response.data.reviews.findIndex(x => x.id == productId))

            console.log("products",allProducts);
            console.log("reviews",typeof(allReviews), allReviews, allReviews.length);
        })
        .catch((Error) =>{
            console.log(Error);
        })


    },[setAllProducts])

    //데이터 추출

    //기능테스트: 상품 정보 조회
    if (allProducts !== ''){
    let test = allProducts.find(x => x.id == productId)
    console.log('test',test)
    }
    //1. 현재 조회 상품의 정보
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

    console.log('thisProduct',thisProduct)

    //2. 현재 조회 상품의 리뷰
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

    console.log('thisReview',thisReview)


// let obj = ''
//     axios.get('https://1cb3d0ee-9fbb-4263-a6df-4a788bce9eaf.mock.pstmn.io/img/')
//     .then(Response => {
//         // obj = JSON.parse(Response);
//         obj = JSON.stringify(Response.data);
//         console.log(obj);
//         console.log("hi")
//     })
//     .catch((Error) =>{
//         console.log(Error);
//     } )

  return (
    <>
        <div>
            test page
        </div>
        <br/>
        <div>
        </div>
    </>
  )
}
