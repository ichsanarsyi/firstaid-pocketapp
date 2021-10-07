import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Beranda from './Components/Beranda';
import Tindakan from './Components/Tindakan';
import reportWebVitals from './reportWebVitals';
import BottomAppBar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/" component={Beranda} />        
        <Route path="/beranda" component={Beranda} />
        <Route path="/tindakan" component={Tindakan} />
      </Switch>
      <BottomAppBar />
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
