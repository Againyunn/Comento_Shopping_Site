import React from 'react'
import styled from 'styled-components'

export default function ProductBlock({ productTitle, productDescribe, imgLink }) {
  //상품이미지css   >>> 필요에따라 div 안에서 이미지 크기 자동조절되도록 설정
  const ProductImgLink = require(imgLink)
  

  //상품 제목css
  const ProductTitleStyle = styled.p`
    /* 상품 타이틀 */
    position: relative;

    /* H3/Bold */
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    /* identical to box height, or 130% */

    letter-spacing: -0.01em;

    color: #000000;
    `

  //상품 설명css
  const ProductDescribeStyle = styled.p`
    /* 상품 설명 */

    position: relative;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    /* or 131% */

    letter-spacing: -0.01em;

    color: #000000;
    `

  return (
    <div>
      <img src={ProductImgLink} alt={productTitle} />
      <div><ProductTitleStyle children={productTitle} /></div>
      <div><ProductDescribeStyle children={productDescribe} /></div>
    </div>
  )
}
