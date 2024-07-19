import {Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Log-in';
//import Exa from './components/exa';
import Header from './components/Header';
import Tech from './components/Tech';
import Homeapp from './components/Homeapp';
import Child from './components/Child';
//import Iphone from './components/template/tech/Iphone';
import After from './components/Aftersign';
import Cart from './components/Cart';
import Cartchange from './components/Cartchange';
function App() {
  return (
    <div>
      <div className= "container">
      <Routes>
      <Route path = "/" element = { <Home />} ></Route>
      <Route path = "/signup" element = { <Signup />} ></Route>
      <Route path = "/login" element = { <Login />} ></Route>
      {/* <Route path = "/exa" element = { <Exa />} ></Route> */}
      <Route path = "/head" element = { <Header />} ></Route>
      <Route path = "/tech" element = { <Tech />} ></Route>
      <Route path = "/tech/:userName" element = { <Tech />} ></Route>
      <Route path = "/homeapp" element = { <Homeapp />} ></Route>
      <Route path = "/child" element = { <Child />} ></Route>
      {/* <Route path = "/iphone" element = { <Iphone />} ></Route> */}
      <Route path = "/after" element = { <After />} ></Route>
      <Route path = "/cart" element = { <Cart />} ></Route>
      <Route path = "/cart/:id" element = { <Cartchange />} ></Route>
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
