import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'styles/scss/import.scss';

import {ThemeProvider} from 'data/ThemeProvider';
import Layout from 'pages/Layout'
import Home from 'pages/Home';
import Skill from 'pages/Skill';
import Calc from 'pages/Calc';
import My from 'pages/My';
import Mail from 'pages/Mail';
import KakaoBank from 'pages/KakaoBank';
import Setting from 'pages/Setting';

import NotFound from "pages/NotFound";

function App() {
  return (
    <div className="App">
        <BrowserRouter basename= {process.env.PUBLIC_URL} >
          <ThemeProvider >
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path="/Calc" element={<Calc/>}></Route>
                <Route path="/Skill" element={<Skill />}></Route>
                <Route path="/My" element={<My/>}></Route>
                <Route path="/Mail" element={<Mail/>}></Route>
                <Route path="/KakaoBank" element={<KakaoBank/>}></Route>
                <Route path="/Setting" element={<Setting/>}></Route>
              <Route path="/*" element={<NotFound/>}></Route>
              </Route>
            </Routes>
          </ThemeProvider >
        </BrowserRouter>
    </div>
  );
}

export default App;
