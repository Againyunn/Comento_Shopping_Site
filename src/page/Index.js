import { Outlet, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getWinterList, getGiftList, getSpringComes} from '../data/ProductData';
//Swiper 적용
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//선택한 제품군을 보여줄 때 active 적용
import SelectThemeActive from '../component/SelectThemeActive';
import styled from 'styled-components';

function Index() {
  //상태값 지정
  const [selectedTheme, setSelectedTheme] = useState(''); //노출되는 페이지 항목 변경 + 선택된 테마 hover 기능 적용

  useEffect(() =>{
    return ProductList(selectedTheme)
  },);

  //선택한 제품군 목록 불러오는 함수
  function ProductList(){
    let thisProductList = ''

    //초기상태
    if(selectedTheme === ''){
      return ( <></>)
    }

    //방한용품
    if(selectedTheme === 'winter'){
      thisProductList = getWinterList(); //해당 리스트 담아오기
    }

    //나를 위한 선물
    if(selectedTheme === 'gift'){
      thisProductList = getGiftList();
    }

    //봄은 온다
    if(selectedTheme === 'spring'){
      thisProductList = getSpringComes();
    }

    return(
      <div style={{textAlign:"center",  float:"top", position: "relative", top:"35px"}}>
        <nav style={{
            padding: "1rem", border: "0px"
          }} >
        {thisProductList.map(findList =>(
          <div key={findList.id}>
          <Link
          style={{ margin: "1rem",  textDecoration: 'none' }}
          to={`/ProductDetail/${findList.id}`}
          key={findList.id}
          >
            <div>
              <img style={{maxWidth:"100%", maxHeight:"100%"}} src={process.env.PUBLIC_URL+`${findList.image}`} alt={findList.name} />
            <p style={{color:"black", textAlign:"left", fontFamily:"Noto Sans CJK KR", fontStyle:"normal", fontWeight:"bold", fontSize:"20px", lineHeight:"26px"}}>{findList.name}</p>
            <p style={{color:"black", textAlign:"left", fontFamily:"Noto Sans CJK KR", fontStyle:"normal", fontWeight:"normal", fontSize:"16px", lineHeight:"21px"}}>{findList.describe}</p>
            </div>
          </Link>
          </div>
        ))}
      </nav>
    </div>
    );
        }
  
  return (
    <>
    <MainHeadBlock/>
      <div style={{zIndex: "1", float:"top",position: "absolute", top:"10%", width:"100%"}}>
      <Swiper className="mySwiper" style={{ borderBottom:"solid 2px #EEEEEE"}}>
        <SwiperSlide>
          <div style={SelectThemeActive(selectedTheme,"winter",'/Imgs/썸네일/방한용품.png')}  
          onClick={() => setSelectedTheme('winter')}
            >방한 용품
            </div>
          <div style={SelectThemeActive(selectedTheme,"gift",'/Imgs/썸네일/나를위한선물.png')}
            onClick={()=> setSelectedTheme('gift')}
            >나를 위한 선물</div>
          <div style={SelectThemeActive(selectedTheme,"spring",'/Imgs/썸네일/봄은온다.png')}
          onClick={() => setSelectedTheme('spring')}
          >봄은 온다</div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={SelectThemeActive(selectedTheme,"winter",'/Imgs/썸네일/방한용품.png')}  
          onClick={() =>setSelectedTheme('winter')}
            >방한 용품2
            </div>
          <div style={SelectThemeActive(selectedTheme,"gift",'/Imgs/썸네일/나를위한선물.png')}
            onClick={()=> setSelectedTheme('gift')}
            >나를 위한 선물2</div>
          <div style={SelectThemeActive(selectedTheme,"spring",'/Imgs/썸네일/봄은온다.png')}
          onClick={() => setSelectedTheme('spring')}
          >봄은 온다2</div>
        </SwiperSlide>
      </Swiper>
   
    <ProductList style={{float:"top",marginTop: "5px", width:"100%"}} />

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

function MainHeadBlock(){
  return (
    <MainHead className='container'>
      <SideMainHead>
      </SideMainHead>
        <CenterMainHead>
          <Link to="/"  style={{ textDecoration: 'none', color: "black" }}>
          토멘코 쇼핑
          </Link>
        </CenterMainHead>
        <SideMainHead>
          <Link to="/Cart"  style={{ textDecoration: 'none', color:"black" }}>
          장바구니
          </Link>
        </SideMainHead>

    </MainHead>
  )

}
