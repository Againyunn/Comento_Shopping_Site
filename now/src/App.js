import Intro from './Components/Intro';
import "./Components/font.css";
import NavTomenco from './Components/NavTomenco';
import Main from './Pages/Main';
import { Outlet, Link} from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';
import { useEffect, useState } from 'react';
import {getWinterList, getGiftList, getSpringComes} from './Data/ProductData';


function App() {
  //상태값 지정
  const [selectedTheme, setSelectedTheme] = useState('none');

  useEffect(() =>{
    return ProductList(selectedTheme)
  },);

  //선택한 제품군 목록 불러오기
  function ProductList(){
    let thisProductList = ''

    //초기상태
    if(selectedTheme === 'none'){
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


    // ***** figma의 디자인 서식 적용해서 코드 수정 필요
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
  

  // ***** 모든 기능 및 디자인 구현 뒤, Swiper 적용한 컴포넌트 생성 및 적용 필요




  // ***** figma의 디자인 서식 적용해서 코드 수정 필요
  return (
    <>
      <div style={{ borderBottom:"solid 2px #EEEEEE", paddingTop: "3%",backgroundColor: "white",zIndex: "2" ,position: "fixed", top: "0px", left:"0px", width:"100%", height:"26px"}}>
        <div style={{float:"left", top: "0px", left:"0px", width:"33.3%",height: "8%", textAlign:'center' }}></div>
        <Link to='/' style={{textDecoration: 'none'}}>
          <div style={{ fontFamily:'Noto Sans KR', fontStyle:"normal", fontSize:"18px", fontWeight:"bold" , color:"black", float:"left", top: "0px", left:"0px", width:"33.3%",height: "8%", textAlign:'center' }}>토멘코 쇼핑</div>
        </Link>
        <Link to='/Cart' style={{textDecoration: 'none'}}>
          <div style={{paddingTop: "5px", fontFamily:'Noto Sans KR', fontStyle:"normal", fontSize:"12px", fontWeight:"bold" , color:"black",float:"left", top: "0px", left:"0px", width:"33.3%",height: "8%", textAlign:'center' }}>장바구니</div>
        </Link>
      </div>
      <div style={{zIndex: "1", float:"top",position: "absolute", top:"10%", width:"100%"}}>
        <div style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL+'/Imgs/썸네일/방한용품.png'})` ,color: "white", paddingTop:"20px",marginBottom:"5px", marginRight: "5px", marginLeft:"5px" ,opacity:"0.85",borderRadius: "10px",top:"10%",position:"relative", float: "left", width: "30%", height:"50px", textAlign: "center"}}  onClick={() => setSelectedTheme('winter')}
          >방한 용품
          </div>
        <div style={{backgroundPosition: "center",backgroundRepeat: "no-repeat", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${process.env.PUBLIC_URL+'/Imgs/썸네일/나를위한선물.png'})`, color:"white", opacity:"0.85",paddingTop:"20px",marginBottom:"5px", marginRight: "5px", marginLeft:"5px" ,borderRadius: "10px",top:"10%",position:"relative", float: "left", width: "30%", height:"50px", textAlign: "center"}}
          onClick={()=> setSelectedTheme('gift')}
          >나를 위한 선물</div>
        <div style={{backgroundPosition: "center",backgroundRepeat: "no-repeat", backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${process.env.PUBLIC_URL+'/Imgs/썸네일/봄은온다.png'})`, color:"white", opacity:"0.85", paddingTop:"20px",marginBottom:"5px", marginRight: "5px", marginLeft:"5px" ,borderRadius: "10px",top:"10%",position:"relative", float: "left", width: "30%", height:"50px", textAlign: "center"}}
         onClick={() => setSelectedTheme('spring')}
        >봄은 온다</div>

        <div style={{backgroundColor:"#EEEEEE", width:"100%", height:"2px", top:"90px",position:"relative", float:"top"}}></div>
        
    
    <ProductList style={{float:"top",marginTop: "5px", width:"100%"}} />

    <Outlet />
    </div>
    </>    
  );
}

export default App;


// return (
//   <>

//   <Routes>
//     <Route path='/ProductDetail' element={<ProductDetail/>} />
//     <Route path='/cart' element={<Cart/>} />
//     <Route path='/' element={<Main/>} />
//   </Routes>


//   <Main />

  
//   </>    
// );


 // function ShowList(productTheme){
  //   console.log("product list call")

  //   //초기상태
  //   if (productTheme === ''){
  //     return (
  //       <div>상품 유형을 선택해주세요!</div>
  //     );
  //   }

    
  //   //productTheme에 따른 데이터 가져와서 출력하기
  //   if (productTheme === 'winter' ){
  //     console.log("winter call")
  //     let winterList1 = getWinterList()
  //     return (
  //       <div style={{ display: "flex"}}>
  //         <nav
  //         style= {{
  //           borderRight: "solid 1px",
  //           padding: "1rem"
  //         }}
  //         >
  //           {winterList1.map(winterList =>(
  //             <Link
  //             style={{display: "block", margin: "1rem 0"}}
  //             to={`/${winterList.id}`}
  //             key={winterList1.id}
  //             >
  //               {winterList1.name}
  //             </Link>
  //           ))}

  //         </nav>
  //       </div>
  //     );
  //   }
    
  //   return (
  //     <div>상품 유형을 선택해주세요!</div>
  //   );


  // }