import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductTheme(itemName) {

    // const itemName = product;

    const ItemBox = (itemName) => {
      console.log('ItemBox', itemName)
        return (

            <div style={{width:"144px", height:'74px', position: "absolute", backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "10px"}}>
                <p style={{position: "absolute", fontFamily: "Noto Sans CJK KR", fontStyle: "normal", fontWeight: "bold", fontSize:"20px", lineHeight:"26px", display:"flex", alignItems: "center", letterSpacing:"-0.01em", color:"white"}}># {itemName}</p>
            </div>
        )
    }
    
    //겨울 방한템
    

    //나를 위한 선물


    //봄은 온다.

  return (
    <ItemBox itemName = {itemName} />
  )
}
