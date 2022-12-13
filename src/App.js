import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./element/Home"
import Products from "./element/Products"
import About from "./element/About.js"
import Contact from "./element/Contact.js"
import SingleProduct from "./element/SingleProduct.js"
import Cart from "./element/Cart.js"
import ErrorPage from "./element/ErrorPage.js"
import { GlobalStyle } from "./element/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./component/Header"
import Nav from "./component/Nav"
const App = () => {
  // const theme = {
  //  colors:{
  //   bg: "#fff",
  //  }
  // };
  return (
    // <div><h1>bhai salam </h1></div> 
{/* <Header/>, */},
       <GlobalStyle/>,
    <Router>
       <Routes>
          <Route path="/home" element={<Home/>}/> 
         <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
         <Route path="/contact" element={<Contact/>}/>
          <Route path="/SingleProduct/:id" element={<SingleProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
         <Route path="/header" element={<Header/>}/> 
         <Route path="/navber" element={<Nav/>}/> 
           <Route path="*" element={<ErrorPage/>}/>
         </Routes>
          </ Router>
  

  )
};

export default App;
