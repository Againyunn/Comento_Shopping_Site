/* d 페이지 */
import { Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTheme } from '../../data/ProductData';
//Swiper 적용
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//선택한 제품군을 보여줄 때 active 적용
import SelectThemeActive from '../../component/SelectThemeActive';
import styled from 'styled-components';

import ProductList from './components/ProductList';

function Index() {
  //상태값 지정
  const [selectedTheme, setSelectedTheme] = useState(''); //노출되는 페이지 항목 변경 + 선택된 테마 hover 기능 적용

  //선택한 제품군 목록 반환
  useEffect(() => {
    ProductList(selectedTheme);
  },[selectedTheme]);


    //썸네일을 불러올 테마 리스트 값 저장
    const allThemeList = getTheme();
    let tmpList = [];
    let themeList = [];
    let countSwiper = 0;

    //3등분으로 쪼개서 데이터 저장
    for(var i = 0; i<allThemeList.length; i++){
      tmpList.push(allThemeList[i])
      
      if((i+1) % 3 === 0 || i === allThemeList.length-1){
        themeList.push(tmpList)
        tmpList = []
      }
    }

  return (
    <>
      <MainHeadBlock />
      <div style={{ zIndex: "1", float: "top", position: "absolute", top: "10%", width: "100%" }}>
      
      <Swiper className="mySwiper" style={{ borderBottom: "solid 2px #EEEEEE" }}>
          {
            themeList.map(thisThings =>(
              <SwiperSlide key={countSwiper += 1}>
                {
                  thisThings.map(thisTheme =>(
                    <div 
                    key={thisTheme.id + thisTheme.type}
                    style={SelectThemeActive(selectedTheme, thisTheme.type, thisTheme.img)}
                    onClick={() => setSelectedTheme(thisTheme.type)}
                    >{thisTheme.name}</div>
                  ))
                }
              </SwiperSlide>
            ))}
        </Swiper>

        <ProductList style={{ float: "top", marginTop: "5px", width: "100%" }} theme={selectedTheme}/>

        <Outlet />
      </div>
    </>
  );
}

export default Index;

//디자인 적용

const MainHead = styled.div`
  /*배치*/
  display: flex;
  padding-top: 3%;
  z-index: 2;
  top: 0;
  position: fixed;
  align-items: center;
  container{
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }
  /*크기*/
  width: 100%;
  height: 40px;
  
  /*색 조정 */
  background-color: white;
  border-bottom: solid 2px #EEEEEE;
`

const CenterMainHead = styled.div`
  /*배치*/
  display: flex;
  text-align: center;
  position: relative;
  margin-right: 10%;
  margin-left: 10%;
  /*크기*/
  width: 30%;
  /*글씨*/
  color: black;
  font-family: Noto Sans KR;
  font-style: normal;
  font-size: 18px;
  font-weight: bold;
  white-space : nowrap; 
`

const SideMainHead = styled.div`
  /*배치*/
  display: flex;
  text-align: center;
  position: relative;
  
  /*크기*/
  width: 30%;
  /*글씨*/
  color: black;
  font-family: Noto Sans KR;
  font-style: normal;
  font-size: 12px;
  font-weight: normal;
  white-space : nowrap; 
`

function MainHeadBlock() {
  return (
    <MainHead className='container'>
      <SideMainHead>
      </SideMainHead>
      <CenterMainHead>
        <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
          토멘코 쇼핑
        </Link>
      </CenterMainHead>
      <SideMainHead>
        <Link to="/Cart" style={{ textDecoration: 'none', color: "black" }}>
          장바구니
        </Link>
      </SideMainHead>

    </MainHead>
  )
}