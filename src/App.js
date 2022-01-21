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

  return (
    <div style={{ background:'linear-gradient(90deg, rgba(7,163,253,1) 0%, rgba(20,220,213,1) 100%)' }} >
    
   <Router>
    <Switch>
        <Route path="*" children={<Home />} />
      </Switch>
   </Router>
    
    <Footer style={{ textAlign: 'center', backgroundColor:'white' }}>Currently v1.0.Copyright © 2021 Cross Care . All rights reserved.</Footer>
    </div>
  );

}

export default (App);