import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element ={<App />} />
      <Route path='/ProductDetail' element ={<ProductDetail/>} />
        <Route path=':id' element={<ProductDetail/>} />
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