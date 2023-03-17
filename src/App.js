import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/app.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>

          <Route path="*" element={<div style={{color : "white"}}>Page not found 404</div>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  );
}

export default App;
