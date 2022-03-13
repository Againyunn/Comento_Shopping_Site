/* 상품 상세 페이지 */

import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import AlertTheme from '../../component/AlertTheme';//사용자 지정 alert 디자인 적용
import ShowType from '../../component/ShowType';  //상세페이지 || 리뷰의 hover 적용
import { getGiftList, getReview, getSpringComes, getWinterList } from '../../data/ProductData';
//API 테스트
import axios from 'axios'
// import ThisProductDetail from '../api/ThisProductDetail';
import ThisProductReview from '../../api/ThisProductReview';
import styled from 'styled-components';
import HeadBlock from './components/HeadBlock';

export default function ProductDetail() {
  //상태값 지정
  const [thisType, setThisType] = useState('') // 보여줄 화면(기본 값: 상품설명) & hover기능 제어용
  const [thisNum, setThisNum] = useState(0); //현재 상품의 선택 개체 수
  const [thisProduct, setThisProduct] = useState('');

  //API셋팅
  const [allData, setAllData] = useState('')

   /*API상품******************************************************************** */
  useEffect( ()=>{
      //JSON 데이터 호출
          axios.get('https://af713111-3b81-45bd-b1a1-fccceb174d27.mock.pstmn.io/ProductPage/')
          .then(Response => {
              setAllData(Response.data)
  
          console.log("get API data",allData);
          // console.log("allData.products",allData.products)
          })
          .catch((Error) =>{
              console.log(Error);
          })
      },[setAllData])

  useEffect(() => {
    Show()
  },[])

  useEffect(() => {
  /*상품******************************************************************** */

    if(allData.products === undefined){
      return
    }

    //현재 보고있는 상품의 데이터만 필터링
    for (var j = 0; j < allData.products.length; j++) {

      if (productId == allData.products[j].id) {
        setThisProduct(allData.products[j]);
      }
    }
  },[allData])

  //url의 parameter를 변수로 저장
  let params = useParams();
  let productId = params.id; //이번 페이지에서 사용할 상품식별자


  /*리뷰******************************************************************** */
  //상품 리뷰 가져오기
  function ShowReviewContent({thisReview}) {

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


  let thisReview = ThisProductReview(productId)

  //테스트
  // console.log("productDetail",thisProduct);
  // console.log("productReview", thisReview)

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
          < ShowReviewContent thisReview={thisReview}/>
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
  // console.log('thisProduct',thisProduct.price)

  //css
  const ImgBlock = styled.div`
    div.container{
      display: flex;
      flex-direction: column;
      flex-warp: nowrap;
      align-items: center;
    }
    
    img{
      max-width: 100%;
    }  
  `

  const MainBlock = styled.div`
    div.container{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;

      /* 폰트 공통 설정 */
      font-family: Noto Sans CJK KR;
      font-style: normal;
      color: black;
    }

    div.item:nth-child(1){
      flex-basis: 47%;
      text-align: left;
      padding-left: 10px;
      font-size: 20px;
      font-weight: bold;
    }

    div.item:nth-child(2){
      flex-basis: 47%;
      text-align: right;
      padding-right: 10px;
      font-size: 16px;
      font-weight: normal;
    }

    div.item:nth-child(3){
      flex-basis: 47%;
      text-align: left;
      padding-right: 15px;
      font-size: 16px;
      font-weight: normal;
    }

    div.item:nth-child(4){
      flex-basis: 45%;
      padding-right: 10px;
      font-size: 16px;
      font-weight: normal;
    }

    div.item:nth-child(5){
      flex-basis: 48%;
      text-align: center;
      font-size: 16px;
      font-weight: normal;
      border: solid 2px #EEEEEE;

      &:hover {
        background-color: #EEEEEE;
        color: black;
      }
    }

    div.item:nth-child(6){
      flex-basis: 48%;
      text-align: center;
      font-size: 16px;
      font-weight: normal;
      border: solid 2px #EEEEEE;

      &:hover {
        background-color: #EEEEEE;
        color: black;
      }
    }
  `

  const CollectCart = styled.div`
    padding-top: 1rem;
    background-color: #24DBAF;
    z-index: 2;
    position: fixed;
    bottom: 0px; 
    left: 0px;
    width: 100%; 
    height: 40px; 
    font-family: Noto Sans KR;
    font-style: normal; 
    font-size: 18px; 
    font-weight: bold; 
    color: black; 
    text-align: center;
  `

  return (
      <>
        <HeadBlock/>

        <ImgBlock>
          <div className='container'>
            <img src={process.env.PUBLIC_URL + `${thisProduct.image}`} alt={thisProduct.name} />
          </div>
        </ImgBlock>
        <MainBlock>
          <div className='container'>
            <div className='item'>
              {thisProduct.name}
            </div>
            <div className='item'>
              {
                thisProduct!==''? 
                thisProduct.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","):0
              }원
            </div>

            <div className='item'>
              &nbsp;수량선택
            </div>

            <div className='item'>
              <input style={{ border: "0px", borderRadius: "3px", background: "#c8c8c8", marginTop: "15px", position: "relative", float: "right"}} type='button' onClick={() => setThisNum(thisNum => thisNum + 1)} value='+' />
                <p style={{ position: "relative", float: "right", marginRight: "5px", marginLeft: "5px" }}>{thisNum}</p>
                <input style={{ border: "0px", borderRadius: "3px", background: "	#c8c8c8", marginTop: "15px", position: "relative", float: "right" }} type='button' onClick={() => {
                  if (thisNum === 0) { 
                    return
                  } 
                  setThisNum(thisNum => thisNum - 1);
                }} value='–' />
            </div>

            <div className='item' style={ShowType(thisType, "detail")} onClick={() => setThisType('detail') } >상품설명</div>
            <div className='item' style={ShowType(thisType, "review")} onClick={() => setThisType('review') }>상품후기</div>

          </div>
        </MainBlock>

        <Show />

        <CollectCart onClick={() => ProductCart()}>장바구니 담기</CollectCart>
    </>
  )
}
