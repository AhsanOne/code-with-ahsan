// import react
import React from "react";
// import bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// import app CSS 
import './App.css';
// importing the components 
import { AllServices } from './components/AllServices/AllServices';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Services from './components/Services/Services';
import { About } from "./components/About/About";
import Login from "./components/Login/Login";
import Blogs from "./components/Blogs/Blogs";
import NotFound from "./components/NotFound/NotFound";
// importing the react router DOM 
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          {/* banner and service router  */}
          <Route exact path='/'>
            <Banner></Banner>
            <Services></Services>
          </Route>
          {/* banner and service router  */}
          <Route exact path='/home'>
            <Banner></Banner>
            <Services></Services>
          </Route>
          {/* All service router  */}
          <Route exact path='/services'>
            <AllServices></AllServices>
          </Route>
          {/* blog router  */}
          <Route exact path='/blog'>
            <Blogs></Blogs>
          </Route>
          {/* About page router  */}
          <Route exact path='/about'>
            <About></About>
          </Route>
          {/* Login page router router  */}
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          {/* 404 page router  */}
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
