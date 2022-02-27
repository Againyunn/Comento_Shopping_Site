// import Intro from './Components/Intro';
import "./Components/font.css";
import { Outlet, Link} from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';
import { useEffect, useState } from 'react';
import {getWinterList, getGiftList, getSpringComes} from './Data/ProductData';
//Swiper 적용
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SelectThemeHover from './Components/SelectThemeHover';

function App() {
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
      <div style={{ borderBottom:"solid 2px #EEEEEE", paddingTop: "3%",backgroundColor: "white",zIndex: "2" ,position: "fixed", top: "0px", left:"0px", width:"100%", height:"26px"}}>
        <div style={{float:"left", top: "0px", left:"0px", width:"33.3%",height: "8%", textAlign:'center' }}></div>
        <Link to='/' style={{textDecoration: 'none'}}>
          <div style={{ fontFamily:'Noto Sans KR', fontStyle:"normal", fontSize:"18px", fontWeight:"bold" , color:"black", float:"left", top: "0px", left:"0px", width:"33.3%",height: "8%", textAlign:'center' }} onClick={()=>window.location.reload()}>토멘코 쇼핑</div>
        </Link>
        <Link to='/Cart' style={{textDecoration: 'none'}}>
          <div style={{paddingTop: "5px", fontFamily:'Noto Sans KR', fontStyle:"normal", fontSize:"12px", fontWeight:"bold" , color:"black",float:"left", top: "0px", left:"0px", width:"33.3%",height: "8%", textAlign:'center' }}>장바구니</div>
        </Link>
      </div>
      <div style={{zIndex: "1", float:"top",position: "absolute", top:"10%", width:"100%"}}>
      <Swiper className="mySwiper" style={{ borderBottom:"solid 2px #EEEEEE"}}>
        <SwiperSlide>
          <div style={SelectThemeHover(selectedTheme,"winter",'/Imgs/썸네일/방한용품.png')}  
          onClick={() => setSelectedTheme('winter')}
            >방한 용품
            </div>
          <div style={SelectThemeHover(selectedTheme,"gift",'/Imgs/썸네일/나를위한선물.png')}
            onClick={()=> setSelectedTheme('gift')}
            >나를 위한 선물</div>
          <div style={SelectThemeHover(selectedTheme,"spring",'/Imgs/썸네일/봄은온다.png')}
          onClick={() => setSelectedTheme('spring')}
          >봄은 온다</div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={SelectThemeHover(selectedTheme,"winter",'/Imgs/썸네일/방한용품.png')}  
          onClick={() =>setSelectedTheme('winter')}
            >방한 용품2
            </div>
          <div style={SelectThemeHover(selectedTheme,"gift",'/Imgs/썸네일/나를위한선물.png')}
            onClick={()=> setSelectedTheme('gift')}
            >나를 위한 선물2</div>
          <div style={SelectThemeHover(selectedTheme,"spring",'/Imgs/썸네일/봄은온다.png')}
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

export default App;
