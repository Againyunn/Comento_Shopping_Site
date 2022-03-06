import React, { useEffect, useState } from 'react'
import { getTheme } from '../../../data/ProductData'
//Swiper 적용
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//선택한 제품군을 보여줄 때 active 적용
import SelectThemeActive from './SelectThemeActive';
import styled from 'styled-components';

export default function SwiperTheme(clickedTheme) {
    //보여줄 선택된 테마값 지정
    const [selectedTheme, setSelectedTheme] = useState(''); //노출되는 페이지 항목 변경 + 선택된 테마 hover 기능 적용
    
    // useEffect(()=>{
    //     ShowSwiper()    //selectedTheme 변경 시 실행
    // },[selectedTheme])

    //썸네일을 불러올 테마 리스트 값 저장
    const themeList = getTheme();

    //선택된 테마 인식
    setSelectedTheme(clickedTheme)

    //테스트
    console.log("SwiperTheme")
    console.log("clickedTheme",clickedTheme)

    //Swiper 값을 반환
    function ShowSwiper(){
        return(
            <>
                <Swiper className="mySwiper" style={{ borderBottom: "solid 2px #EEEEEE" }}>
                    <SwiperSlide>
                        {
                            themeList.map(thisTheme =>(
                                <div 
                                key={thisTheme.id}
                                style={SelectThemeActive(selectedTheme, thisTheme.type, thisTheme.img)}
                                onClick={() => setSelectedTheme(thisTheme.type)}
                                >{thisTheme.name}</div>
                            ))
                        }
                    </SwiperSlide>
                </Swiper>
            </>
        )
    }

  return (
    <ShowSwiper />
  )
}
