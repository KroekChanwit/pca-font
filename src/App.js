// main libary
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// page
import Home from './page-component/Home'


// css
import './App.css';
import 'antd/dist/antd.css'


// component
import { Layout } from 'antd';
const { Footer } = Layout;

const App = (props) => {

  console.log(props)

  const myStyle = {
    backgroundImage:'url("https://res.cloudinary.com/jerrick/image/upload/v1523472954/hgjbuqpshv7xg1bypizm.gif")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
  }

  return (
    // <div style={{ background:'linear-gradient(90deg, rgba(173,47,98,1) 0%, rgba(175,168,255,1) 100%)' }} >
    <div style={myStyle} >
    
   <Router>
    <Switch>
        <Route path="*" children={<Home />} />
      </Switch>
   </Router>
    
    <Footer style={{ textAlign: 'center', backgroundColor:'#212529', color:'white' }}>Copyright © Pca-Project 2021</Footer>
    </div>
  );

}

export default (App);