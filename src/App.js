import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'styles/scss/import.scss';


import Layout from 'pages/Layout'
import Main from 'pages/Main';
import Skill from 'pages/Skill';
import Calc from 'pages/Calc';
import My from 'pages/My';
import Mail from 'pages/Mail';
import KakaoBank from 'pages/KakaoBank';

import NotFound from "pages/NotFound";

function App() {
  return (
    <div className="App">
        <BrowserRouter basename= {process.env.PUBLIC_URL} >
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Main/>}></Route>
              <Route path="/Calc" element={<Calc/>}></Route>
              <Route path="/Skill" element={<Skill />}></Route>
              <Route path="/My" element={<My/>}></Route>
              <Route path="/Mail" element={<Mail/>}></Route>
              <Route path="/KakaoBank" element={<KakaoBank/>}></Route>
             <Route path="/*" element={<NotFound/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
