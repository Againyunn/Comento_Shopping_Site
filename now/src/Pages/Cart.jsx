import React, { useEffect, useState } from 'react'
import { getWinterList ,getGiftList } from '../Data/ProductData'


export default function Cart() {
  const [cartLoad, setCartLoad] = useState('')

  useEffect(()=>{
    return ShowCart()
  },)


  // let CartList = localStorage.getItem();
  let CartList=[]

  //localStorage에서 데이터 가져오기
  function getLocalItems(k){
    if (k){
      try{
        return JSON.parse(localStorage.getItem(k))
       } catch(e){
         return localStorage.getItem(k)
      }
    }
  }

  for (var i = 0; i < localStorage.length; i++){
    // do something with localStorage.getItem(localStorage.key(i));

    var thisProductId = getLocalItems(localStorage.key(i));
    CartList.push(thisProductId);
}

  function ShowCart(){
    setCartLoad('');
    console.log(CartList)
    return (
      <div style={{}}>
      <nav
      style= {{
        borderRight: "solid 1px",
        padding: "1rem"
      }}
      >
        {CartList.map(findList =>(
          <div key={findList.id}>

            <div>
            <p>{findList.name}</p>
            <br/>
            <p>{findList.describe}</p>
            <br/>
            <p>{findList.num}개</p>
            <br/>
            <p>{findList.num * findList.price}</p>
            </div>
            <p onClick={()=>{
              localStorage.removeItem(findList.id);
              setCartLoad('reset');
            }}>삭제하기</p>
          </div>
        ))}

      </nav>
    </div>
    )
  }


  return (
<ShowCart />
  )
}
