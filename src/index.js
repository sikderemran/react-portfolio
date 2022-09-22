import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import RecentWork from './components/RecentWork';
import NotFound from './components/NotFound';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/works" element={<RecentWork />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
