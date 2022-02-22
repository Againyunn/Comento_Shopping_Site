import Intro from './Components/Intro';
import "./Components/font.css";
import NavTomenco from './Components/NavTomenco';
import Main from './Pages/Main';
import { Outlet, Link} from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';
import { useEffect, useState } from 'react';
import {getWinterList, getGiftList} from './Data/ProductData';


function App() {

  const [selectedTheme, setSelectedTheme] = useState('none');

//   function SetWinter(item){
//   useEffect(() =>{
//       setSelectedTheme(item)
//   },)
// }

  // useEffect(() =>{
  //   if(selectedTheme === 'winter'){
  //     return Winter(selectedTheme)
  //     // return ProductList(selectedTheme)
  //   }
  //   if(selectedTheme === 'gift'){
  //     return Gift(selectedTheme)
  //   }
    
  //   // setSelectedTheme(item)
  // },);

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
      console.log(thisProductList)//테스트용
    }

    //나를 위한 선물
    if(selectedTheme === 'gift'){
      thisProductList = getGiftList();
    }

    return(
      <div style={{}}>
      <nav
      style= {{
        borderRight: "solid 1px",
        padding: "1rem"
      }}
      >
        {thisProductList.map(findList =>(
          <div key={findList.id}>
          <Link
          style={{display: "block", margin: "1rem 0", textDecoration: 'none' }}
          to={`/ProductDetail/${findList.id}`}
          key={findList.id}
          
          >
            <div>
            <p>{findList.name}</p>
            <br/>
            <p>{findList.describe}</p>
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

      <table>
        <thead style={{position: "static", top:'0px', width:"100%", height: "100px", textAlign:'center'}}>
          <tr style={{position: "static", top: '300px', width:"100%", height: "100px"}}>
          <td style={{position: "static", width:"33.3%"}} />
          <td style={{position: "static", width:"33.3%"}}>
          <Link to='/'><h2>토멘코</h2></Link>
          </td>
          <td style={{position: "static", width:"33.3%"}} >
          <Link to='/Cart'>장바구니 이동</Link> 
          </td>
          </tr>
        </thead>
        
        <tbody>
          <tr>
          <td style={{position:"static"}}>
          <div style={{ width: "100%", height: "100px", marginRight: '10px'}}
          onClick={() => setSelectedTheme('winter')}
          >방한 용품</div>
          </td>
          <td>
          <div style={{position:"static", width: "100%", height: "100px", marginRight: '10px'}}
          onClick={()=> setSelectedTheme('gift')}
          >나를 위한 선물</div>
          </td>
          <td>
          <div style={{position:"static", width: "100%", height: "100px", marginRight: '10px'}}>봄은 온다</div>
          </td>
          </tr>
        </tbody>
      </table>
    
    <ProductList />


    <Link to='/ProductDetail'>상세 페이지</Link>
    <Outlet />
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