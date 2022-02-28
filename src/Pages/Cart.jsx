import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getWinterList, getGiftList } from '../Data/ProductData'

//alert 디자인 : sweetalert2 npm package 이용
//npm install --save sweetalert2 sweetalert2-react-content 명령어로 설치
import alertTheme from '../Components/alertTheme';

export default function Cart() {
  //상태 셋팅
  const [cartLoad, setCartLoad] = useState('')  //선택 상품 장바구니에서 삭제
  const [resultTotalSum, setResultTotalSum] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    TotalSum()
    return ShowCart()
  })

  //선택한 상품들의 목록 변화 → 총 가격 변화
  useEffect(()=>{
    TotalSum()
  },[resultTotalSum])


  // let CartList = localStorage.getItem();
  let CartList = []

  //localStorage에서 데이터 가져오기
  function getLocalItems(k) {
    if (k) {
      try {
        return JSON.parse(localStorage.getItem(k))
      } catch (e) {
        return localStorage.getItem(k)
      }
    }
  }

  for (var i = 0; i < localStorage.length; i++) {
    // do something with localStorage.getItem(localStorage.key(i));

    var thisProductId = getLocalItems(localStorage.key(i));
    CartList.push(thisProductId);
  }

  //현재 선택된 장바구니의 상품 가격 총 합 연산 로직
  function TotalSum() {
    let thisSum = 0;
    var thisTmp = 0;

    //해당하는 상품 확인 
    for(var i = 0; i < checkedItems.length; i++){
      for(var j = 0; j < CartList.length; j++){
        if(checkedItems[i] === CartList[j].id){
          thisTmp = CartList[j].num * CartList[j].price;
          thisSum += thisTmp;
          console.log("thisSum:",thisSum)
        }
      }
    }
    return(
      setResultTotalSum(thisSum)
    )
  }

  // let checkedItemPrice = []

  //체크박스 선택된 상품에 대한 상태처리
  function CheckedItems(checked, thisId){ //선택여부(checked), 아이템항목(id)
    //선택된 경우: 선택항목 리스트에 추가
    if (checked) {
      //해당 상품의 가격 업로드
      setCheckedItems([...checkedItems, thisId]);

    }
    else{
      //선택항목에서 해당 아이템 제거
      setCheckedItems(checkedItems.filter((e) => e !== thisId)); 
    }
  }

  //장바구니 상품 목록 반환(LocalStorage에 있는 정보 호출)
  function ShowCart() {

    setCartLoad('');
    return (
      <div style={{}}>
        <nav
          style={{
            padding: "2px"
          }}
        >
          {CartList.map(findList => (
            <div style={{position:"static",clear:"both", float:"top", left:"0px", paddingBottom:"10px"}} key={findList.id}>
              <p style={{ textAlign: "right", paddingRight: "6px", color: "gray" }} onClick={() => {
                localStorage.removeItem(findList.id);
                setCartLoad('reset');
              }}>X</p>
              <div style={{ float: "top", width: "100%", height: "100px", paddingBottom: "10px" }}>
                <div style={{ position: "relative", float: "left", width: "8%" }}>
                  <input id={findList.id} type="checkbox" onChange={
                    (e) => {
                      console.log("e.currentTarget.checked:",e.currentTarget.checked)
                      CheckedItems(e.currentTarget.checked, findList.id)
                      console.log("checkedItems2",checkedItems)
                      
                      TotalSum()
                    }}
                    checked={checkedItems.includes(findList.id) ? true: false} />
                </div>
                <div style={{ position: "relative", float: "left", width: "50%" }}>
                  <img style={{ position: "relative", maxWidth: "100%", maxHeight: "80%" }} src={process.env.PUBLIC_URL + `${findList.image}`} alt={findList.name} />
                </div>
                <div style={{ position: "relative", paddingRight: "5px", float: "right", width: "40%" }}>
                  <div style={{ fontSize: "15px" }}>{findList.name}</div>
                  <br />
                  <div style={{ textAlign: "right" }}>{findList.num}개</div>
                  <div style={{ textAlign: "right" }}>{(findList.num * findList.price).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</div>
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>
    )
  }

  return (
    <>
      <div style={{ paddingTop: "3%", backgroundColor: "white", zIndex: "2", position: "fixed", top: "0px", left: "0px", width: "100%", height: "26px" }}>
        <div style={{ float: "left", top: "0px", left: "0px", width: "33.3%", height: "8%", textAlign: 'center' }} onClick={() => { window.history.back(); }}>
          <img style={{ height: "20px", width: "20px" }} src={process.env.PUBLIC_URL + '/Imgs/Allow.png'} alt={'뒤로 가기'} />
        </div>
        <div style={{ fontFamily: 'Noto Sans KR', fontStyle: "normal", fontSize: "18px", fontWeight: "bold", color: "black", float: "left", top: "0px", left: "0px", width: "33.3%", height: "8%", textAlign: 'center' }}>장바구니</div>
        <div style={{ paddingTop: "5px", fontFamily: 'Noto Sans KR', fontStyle: "normal", fontSize: "12px", fontWeight: "bold", color: "black", float: "left", top: "0px", left: "0px", width: "33.3%", height: "8%", textAlign: 'center' }}></div>
      </div>
      <div style={{ zIndex: "1", float: "top", position: "absolute", top: "10%", width: "100%" }}>

        <ShowCart />
        <div style={{position:"static",clear:"both", float:"top", backgroundColor:"white", bottom:"40px", width:"100%", height:"150px"}}></div>
      </div>

      <div style={{ paddingTop: "3%", backgroundColor: "white", zIndex: "2", position: "fixed", bottom: "0px", left: "0px", width: "100%" }}>
      <div style={{position:"relative",clear:"both", float:"top", backgroundColor:"white", bottom:"40px", width:"100%", height:"20px"}}> 
          <div style={{  backgroundColor:"white", fontFamily: 'Noto Sans KR', fontStyle: "normal", fontSize: "12px", position:"relative",float:"left", width:"40%", left:"10px"}}>배송비</div>
          <div style={{  backgroundColor: "white", fontFamily: 'Noto Sans KR', fontStyle: "normal", fontSize: "12px", fontWeight:"normal", position:"relative", color:"black" ,textAlign:"right",float:"right", width:"30%", right:"10px"}}>0원</div>
        </div>
        <div style={{ backgroundColor: "white", position:"relative", float:"top", bottom:"40px", width:"100%"}}> 
          <div style={{ backgroundColor: "white", fontFamily: 'Noto Sans KR', fontStyle: "normal", fontSize: "12px", position:"relative",float:"left", width:"45%", left:"10px"}}>총 주문금액</div>
          <div style={{  backgroundColor: "white",fontFamily: 'Noto Sans KR', fontStyle: "normal", fontSize: "12px", fontWeight:"bold", position:"relative", color:"#FF4646" ,textAlign:"right",float:"right", width:"50%", right:"10px"}}>{resultTotalSum}원</div>
        </div>
        <div style={{fontFamily: 'Noto Sans KR', fontStyle: "normal", fontSize: "18px", fontWeight: "bold", color: "black", background: "#24DBAF", position:"relative", textAlign:"center", float:"top", bottom:"0px", width:"100%", height:"40px", paddingTop:"30px"}}
          onClick={()=>{
            //디자인 적용된 alert 실행
            alertTheme("주문되었습니다.");
          } 
        }>
          주문하기
        </div>
      </div>
    </>
  )
}
