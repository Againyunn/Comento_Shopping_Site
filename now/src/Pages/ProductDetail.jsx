import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { getGiftList, getWinterList } from '../Data/ProductData';

export default function ProductDetail() {
  //상태값 지정
  const [thisType, setThisType ] = useState('detail')
  const [thisNum, setThisNum] = useState(0); //현재 상품의 선택 개체 수

  useEffect( () =>{
    return(Show())
  })

  //url의 parameter를 변수로 저장
  let params = useParams(); 
  let productId = params.id; //이번 페이지에서 사용할 상품식별자
  console.log(productId)

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
  thisProduct = thisProductList.find(item => item.id == productId)
  console.log(thisProduct)
  console.log(thisProductList)

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
 
          <div key={thisProduct.id}>
            <div>
            <p>{thisProduct.name}</p>
            <br/>
            <p>{thisProduct.describe}</p>
            <br/>
            <p>{thisProduct.price}</p>
            </div>
          </div>



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

          <div key={thisProduct.id}>
            <div>
            <p>{thisProduct.name}</p>
            <br/>
            <p>{thisProduct.describe}</p>
            </div>
          </div>

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

  // 참고 : https://projobs.tistory.com/98
  // function setLocalItems(k, value){
  //   if (typeof value === 'object') {
  //     value = JSON.stringify(value)
  //   }
  //   localStorage.setItem(k, value)
  // }


  //장바구니(localStorage에 저장)
  function ProductCart(){
    // let add = {num : thisNum};
    thisProduct.num = thisNum;

    let thisProductCart = thisProduct
    console.log(thisProductCart)

    let message ='이미 장바구니에 있습니다.';

    //메소드 구성: (key값, value)형태
    if (localStorage.getItem(productId) === null){

      //localStorage에는 String 타입만 저장가능하므로 JSON형태의 데이터로 변환하여 저장
      let value =''
      if (typeof thisProductCart === 'object'){
        value = JSON.stringify(thisProductCart)
      }

      localStorage.setItem(productId, value); 
      message = '장바구니에 저장되었습니다.';
    }

    alert(message);
  }

  return (
    <>
        <table>
          <tbody>
            <tr>
              <Link to='/' style={{textDecoration: 'none'}}>
                <div style={{textAlign: 'center'}}>토멘코</div>
              </Link>
            </tr>
            <tr>
              <td>              
                <input type='button' onClick={()=>setThisNum(thisNum => thisNum + 1)} value='+'/>
                <p>{thisNum}</p>
                <input type='button' onClick={()=>{
                  if (thisNum === 0){
                    return;
                  }
                  setThisNum(thisNum => thisNum - 1);
                  }} value='-'/>
              </td>
            </tr>
            <tr>
            <td onClick={()=>setThisType('detail')}>상품 설명</td>
            <td  onClick={()=>setThisType('review')}>상품 후기</td>
            </tr>
          </tbody>
        </table>
        <Show />

        <br/>
        <div onClick={()=>ProductCart()}>장바구니에 담기</div>
        <div onClick={()=>{localStorage.removeItem( productId)}} >장바구니에서 제외</div>
    </>
    
  )
}
