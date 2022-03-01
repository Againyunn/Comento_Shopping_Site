import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';

// ***** 상품 설명 / 상품 후기 페이지에서 url의 마지막 값에 id가 parameter로 붙는 부분을 페이지 로딩에 적용할 필요


// ***** 상품 설명 / 상품 후기 페이지의 최하단 div를 클릭하면 해당 상품의 id를 localStorage에 저장하는 캐싱 기능 구현 필요


// ***** 장바구니 기능 : 장바구니(/Cart)로 이동하고, localStorage에 저장된 id를 기반으로 각 상품을 표시하는 페이지 작성 필요


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element ={<App />} />
      <Route path='/ProductDetail' element ={<ProductDetail/>} >
        <Route path=':id' element={<ProductDetail/>} />
      </Route>
      <Route path='/Cart' element ={<Cart />} />  
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>죄송합니다. 잘못된 페이지 입니다.</p>
        </main>
      }
    />  
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
//   document.getElementById('root')
// );