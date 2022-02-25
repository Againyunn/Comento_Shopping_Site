import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getWinterList, getGiftList } from '../Data/ProductData'


export default function Cart() {
  //상태 셋팅
  const [cartLoad, setCartLoad] = useState('')  //선택 상품 장바구니에서 삭제
  const [resultTotalSum, setResultTotalSum] = useState(0);
  // const [thisTotalPrice, setThisTotalPrice] = useState(0);

  //변수 및 연산용 데이터 셋팅
  let thisCalculationList = [];
  // let thisTotalPrice = 0;
  // let resultTotalSum = 0

  useEffect(() => {
    return ShowCart()
  })

  useEffect(() =>{
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


  // ***********************현재 문제가 있는 구역!!! ********************** 함수 연산 결과(resultTotalSum) 출력이 안됩니다!!!!
  //현재 선택된 장바구니의 상품 가격 총 합 연산 로직
  function TotalSum() {
    let thisSum = 0;

    //thisCalculationList의 모든 원소 합 구하기
    for(var i = 0; i < thisCalculationList.length; i++){
      var tmp = thisCalculationList[i].num * thisCalculationList[i].price

      thisSum += tmp
      console.log(`${i}번째`,thisSum)
    }
    
    //테스트 용
    console.log('test', thisSum)

    // setThisTotalPrice(thisSum);
    return(
      thisSum
    )
  }

  //장바구니 상품 목록 반환(LocalStorage에 있는 정보 호출)
  function ShowCart() {
    setCartLoad('');
    console.log(CartList)
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
                  <input type="checkbox" onChange={
                    () => {

                      //체크박스 선택 해제 & 해당 상품의 정보가 thisCalculationList에 있는 경우  >>> 현재 상품 정보 삭제
                      if (thisCalculationList.findIndex(x => x.id === findList.id) >= 0) {

                        let thisNum = thisCalculationList.findIndex(x => x.id === findList.id);
                        thisCalculationList.splice(thisNum,1);

                        //테스트
                        console.log("subtract", thisCalculationList)
                        // setResultTotalSum(resultTotalSum + 1);
                        setResultTotalSum(TotalSum())
                        return
                      }

                      //체크박스 선택 && 해당 상품의 정보가 thisCalculationList에 없는 경우 >>> 현재 상품 정보 추가
                      if (thisCalculationList.find(x => x.id === findList.id) === undefined) {
                        thisCalculationList.push({ id: findList.id, num: findList.num, price: findList.price });
                        
                        //테스트
                        console.log("add", thisCalculationList)
                        //상품 총 가격 업로드 연산
                        setResultTotalSum(TotalSum())
                        // setResultTotalSum(resultTotalSum + 1);
                      }

                    }} />
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


  function JustDo(){
    return TotalSum(resultTotalSum)
  }
  //CSS 체크박스 구현





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
        onClick={()=>{alert("주문되었습니다.")}}>
          주문하기
        </div>
      </div>
    </>
  )
}
