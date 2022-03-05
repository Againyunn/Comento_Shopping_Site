import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import AlertTheme from '../component/AlertTheme';//사용자 지정 alert 디자인 적용
import ShowType from '../component/ShowType';  //상세페이지 || 리뷰의 hover 적용
import { getGiftList, getReview, getSpringComes, getWinterList } from '../data/ProductData';
//API 테스트
import axios from 'axios'
import ThisProductDetail from '../api/ThisProductDetail';
import ThisProductReview from '../api/ThisProductReview';

export default function ProductDetail() {
  //상태값 지정
  const [thisType, setThisType] = useState('') // 보여줄 화면(기본 값: 상품설명) & hover기능 제어용
  const [thisNum, setThisNum] = useState(0); //현재 상품의 선택 개체 수

  //API셋팅
  

  useEffect(() => {
    Show()
  })

  //url의 parameter를 변수로 저장
  let params = useParams();
  let productId = params.id; //이번 페이지에서 사용할 상품식별자

  //상품 정보 가져오기
  // useEffect(()=>{
  //   let tmp = ThisProductDetail(productId)
  //   setThisProduct(tmp) //현재 상품 정보(id 일치 상품)
  // },[setThisProduct])
  
  let thisProduct=ThisProductDetail(productId)


  function ShowDetailContent(){

  }

  /**리뷰******************************************************************** */
  //상품 리뷰 가져오기
  function ShowReviewContent() {

    let thisReview = ThisProductReview(productId) //현재 상품 리뷰(id 일치 상품)
    //리뷰가 없다면, 아직 리뷰가 없다는 텍스트 출력
    if (thisReview.length ===0){
      return(
          <div style={{paddingTop: "4rem",paddingBottom: "4rem",marginTop:"2rem",marginBottom:"2rem",top:"10px", textAlign:"center", fontFamily:"Noto Sans CJK KR", fontSize:"15px", color:"gray" }}>
            앗, 아직 리뷰가 없어요!
          </div>
      )
        }

    return (
      <div style={{ textAlign: "center", float: "top", position: "relative", top: "35px" }}>
        <nav style={{
          padding: "1rem"
        }} >
          {thisReview.map(findList => (
            <div key={findList.userName + findList.date} style={{marginBottom:"2rem"}}>
              <CountStar style={{clear:"both",top:"0px", position:"relative"}} findList={findList.star} />
              <div style={{clear:"both", top: "0px", position:"relative"}}>
                <div style={{float:"left", width:"10%", position:"relative"}} />
                <div style={{textAlign:"left", width:"40%", float:"left", fontFamily:"Noto Sans CJK KR", fontStyle: "normal", fontWeight: "bold", fontSize: "15px" }}>{findList.userName}</div>
                <div style={{textAlign:"left", width:"30%", float:"left", color: "gray", fontFamily: "Noto Sans CJK KR", fontStyle: "normal", fontWeight: "normal", fontSize: "15px" }}>{findList.date}</div>
              </div>
              <br/>
              <div style={{textAlign:"left", float:"top", color: "gray", fontFamily: "Noto Sans CJK KR", fontStyle: "normal", fontWeight: "normal", fontSize: "15px" }}>{findList.memo}</div>
            </div>
          ))}
        </nav>
      </div>
    )
  }

  //리뷰의 별 개수 찍는 함수
  function CountStar(starNum) {
    //별의 개수 출력하는 로직
    var printStar = ''

    for (var k = 0; k < Number(starNum.findList); k++) {
      printStar += '★';
    }

    return (
      <>
      <div style={{float:"left", position:"relative", width:"30%", textAlign:"left", color: "#FFD228" }}>{printStar}</div>
      </>
    );
  }

  //테스트
  console.log("productDetail",thisProduct);
  let thisReview = ThisProductReview(productId)
  console.log("productReview", thisReview)

  //상품설명(이미지 호출 및 출력)
  function ShowDetail() {

    return (
      <nav style={{ padding: "2rem", height: "100%", marginBottom: "15%"}}>
        <div style={{ textAlign: "center" , marginTop: "1rem"}}>
        <img style={{top:"1rem",maxWidth:"100%", maxHeight:"100%", float: "top" }} src={process.env.PUBLIC_URL + `${thisProduct.imageDetail}`} alt={thisProduct.name} />
        </div>
      </nav>
    );
  }

  //상품후기
  function ShowReview() {

    return (
      <div style={{ width: "100%", marginBottom:"70px" }}>
        <nav style={{ padding: "1rem" }}>
          < ShowReviewContent />
        </nav>
      </div>
    );
  }

  //화면에서 보여줄 내용(detail: 상품설명, review: 상품리뷰)
  function Show() {
    //기본적으로 상품설명이 노출
    let result = ShowDetail();

    //상품후기
    if (thisType === 'review') {
      result = ShowReview();
    }

    return result;
  }

  // 참고 : https://projobs.tistory.com/98
  // function setLocalItems(k, value){
  //   if (typeof value === 'object') {
  //     value = JSON.stringify(value)
  //   }
  //   localStorage.setItem(k, value)
  // }


  //장바구니(localStorage에 저장)
  function ProductCart() {
    // let add = {num : thisNum};
    if (thisNum === 0) {
      return (
        //디자인 적용된 alert 실행
        AlertTheme("1개 이상 선택해주세요.")
      )
    }

    thisProduct.num = thisNum;

    let thisProductCart = thisProduct
    // console.log(thisProductCart)

    //상황에 맞는 메시지 표시
    let message = '이미 장바구니에 있습니다.';

    //메소드 구성: (key값, value)형태
    if (localStorage.getItem(productId) === null) {

      //localStorage에는 String 타입만 저장가능하므로 JSON형태의 데이터로 변환하여 저장
      let value = ''
      if (typeof thisProductCart === 'object') {
        value = JSON.stringify(thisProductCart)
      }

      localStorage.setItem(productId, value);
      message = '장바구니에 저장되었습니다.';
    }

      //디자인 적용된 alert 실행
      AlertTheme(message);
  }


  //테스트
  console.log('thisProduct',thisProduct.price)

  return (
    <>
      <div style={{ paddingTop: "3%", backgroundColor: "white", zIndex: "2", position: "fixed", top: "0px", left: "0px", width: "100%", height: "26px" }}>
        <div style={{ float: "left", top: "0px", left: "0px", width: "33.3%", height: "8%", textAlign: 'center' }} onClick={() => { window.history.back(); }}>
          <img style={{ height: "20px", width: "20px" }} src={process.env.PUBLIC_URL + '/Imgs/Allow.png'} alt={'뒤로 가기'} />
        </div>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: 'Noto Sans KR', fontStyle: "normal", fontSize: "18px", fontWeight: "bold", color: "black", float: "left", top: "0px", left: "0px", width: "33.3%", height: "8%", textAlign: 'center' }}>토멘코 쇼핑</div>
        </Link>
        <Link to='/Cart' style={{ textDecoration: 'none' }}>
          <div style={{ paddingTop: "5px", fontFamily: 'Noto Sans KR', fontStyle: "normal", fontSize: "12px", fontWeight: "bold", color: "black", float: "left", top: "0px", left: "0px", width: "33.3%", height: "8%", textAlign: 'center' }}>장바구니</div>
        </Link>
      </div>

      <div style={{ zIndex: "1", float: "top", position: "absolute", top: "10%", width: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <img style={{ maxWidth:"100%", maxHeight:"100%", float: "top", position: "relative"}} src={process.env.PUBLIC_URL + `${thisProduct.image}`} alt={thisProduct.name} />
        </div>
        <div style={{ float: "top", position: "relative", width: "100%", left: "0px", height: "50px" }}>
          <div style={{ float: "left", position: "relative", width: "60%", left: "0px" }}>
            <div style={{ paddingTop: "15px", fontFamily: " Noto Sans CJK KR", fontStyle: "normal", fontSize: "20px", fontWeight: "bold", color: "black", paddingLeft: "30px", float: "top" }}>{thisProduct.name}</div>
            <div style={{ fontFamily: " Noto Sans CJK KR", fontStyle: "normal", fontSize: "16px", fontWeight: "normal", color: "black", paddingLeft: "30px", float: "top" }}>{thisProduct!==''?thisProduct.price:''}원</div>
          </div>

          <div style={{ float: "left", position: "relative", width: "40%", right: "0px", paddingTop: "10px" }}>
            <div style={{ fontFamily: " Noto Sans CJK KR", fontStyle: "normal", fontSize: "16px", fontWeight: "normal", textAlign: "right", marginRight: "2px", height: "20px" }}>수량선택</div>
            <input style={{ border: "0px", borderRadius: "3px", background: "#c8c8c8", marginTop: "15px", position: "relative", float: "right", marginRight: "5px" }} type='button' onClick={() => setThisNum(thisNum => thisNum + 1)} value='+' />
            <p style={{ fontSize: "15px", position: "relative", float: "right", marginRight: "5px" }}>{thisNum}</p>
            <input style={{ border: "0px", borderRadius: "3px", background: "	#c8c8c8", marginTop: "15px", position: "relative", float: "right", marginRight: "5px" }} type='button' onClick={() => {
              if (thisNum === 0) { 
                return
              } 
              setThisNum(thisNum => thisNum - 1);
            }} value='–' />
          </div>
        </div>

        <div style={{ height: "100%", float: "top", position: "relative" }}>
          <div style={ShowType(thisType, "detail")} onClick={() => setThisType('detail') } >상품설명</div>
          <div style={ShowType(thisType, "review")} onClick={() => setThisType('review') }>상품후기</div>
        </div>
        <Show style={{ float: "top", position: "relative" }} />

        <div style={{ float: "top", paddingTop: "1rem", backgroundColor: " #24DBAF", zIndex: "2", position: "fixed", bottom: "0px", left: "0px", width: "100%", height: "40px", fontFamily: 'Noto Sans KR', fontStyle: "normal", fontSize: "18px", fontWeight: "bold", color: "black", textAlign: "center" }} onClick={() => ProductCart()}>장바구니 담기</div>
      </div>
    </>
  )
}


//.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","):""