import Intro from './Components/Intro';
import "./Components/font.css";
import NavTomenco from './Components/NavTomenco';
import Main from './Pages/Main';
import {Route, Switch} from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';


function App() {
  return (
    <>
    <Switch>
      <Route path='/ProductDetail' component={ProductDetail} />
      <Route path='/cart' component={Cart} />
      <Route path='/' component={Main} />
    </Switch>

    <Main />

    
    </>    
  );
}

export default App;
