import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getGiftList, getWinterList } from '../Data/ProductData';

export default function ProductDetail() {
  //상태값 지정
  const [thisType, setThisType ] = useState('detail')

  useEffect( () =>{
    return(Show())
  })

  //url의 parameter를 변수로 저장
  let params = useParams(); 
  let productId = params.id; //이번 페이지에서 사용할 상품식별자


  //데이터 셋팅
  let thisProductList = '' //현재 상품군 리스트
  let thisProduct ='' //현재 상품(id 일치 상품)

  //방한용품
  if( 100 <= productId && productId <200 ){
    thisProductList = getWinterList();
  }

  //나를 위한 선물
  if( 200 <= productId && productId <300 ){
    thisProductList = getGiftList();
  }

  //현재 상품의 정보만 담기
  thisProduct = thisProductList.find(item => item.id === productId)


  //상품설명
  function ShowDetail(){

    return(
      <div style={{width:"100%"}}>
      <nav
      style= {{
        borderRight: "solid 1px",
        padding: "1rem"
      }}
      >
        {thisProductList.map(findList =>(
          <div key={findList.id}>
            <div>
            <p>{findList.name}</p>
            <br/>
            <p>{findList.describe}</p>
            </div>
          </div>

        ))}

      </nav>
    </div>
    );
  }

  //상품후기
  function ShowReview(){

    return(
      <div style={{width:"100%"}}>
      <nav
      style= {{
        borderRight: "solid 1px",
        padding: "1rem"
      }}
      >
        {thisProductList.map(findList =>(
          <div key={findList.id}>
            <div>
            <p>{findList.name}</p>
            <br/>
            <p>{findList.describe}</p>
            </div>
          </div>

        ))}

      </nav>
    </div>
    );
  }


  //화면에서 보여줄 내용(detail: 상품설명, review: 상품리뷰)
  function Show(){
    //기본적으로 상품설명이 노출
    let result = ShowDetail();
    
    //상품후기
    if(thisType === 'review'){
      result = ShowReview();
    }

    return (
      result
    )
  }

  return (
    <>
      <div>
        <table>
          <thead>
            <td>상품 설명</td>
          </thead>
        </table>
      </div>
    </>
    
  )
}
