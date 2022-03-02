import ProductDetail from './page/ProductDetail';
import Cart from './page/Cart';
import Index from './page/Index';

//라우터 설정
import { HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

    return(
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Index/>} />
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
    </BrowserRouter>
  );
}

export default App;
