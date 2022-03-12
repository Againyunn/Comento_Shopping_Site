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
import HeadBlock from './components/HeadBlock';

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

    //썸네일에 표시할 ProductTheme 데이터를 3등분으로 쪼개서 저장
    for(var i = 0; i<allThemeList.length; i++){
      tmpList.push(allThemeList[i])
      
      if((i+1) % 3 === 0 || i === allThemeList.length-1){
        themeList.push(tmpList)
        tmpList = []
      }
    }

  return (
    <>
      <HeadBlock />
      <div style={{ zIndex: "1", float: "top", position: "absolute", top: "5%", width: "100%"}}>
      
      <Swiper className="mySwiper" style={{paddingTop:"10px", paddingBottom:"10px", borderBottom: "solid 2px #EEEEEE", borderTop: "solid 2px #EEEEEE"  }}>
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

        <ProductList theme={selectedTheme}/>

        <Outlet />
      </div>
    </>
  );
}

export default Index;
