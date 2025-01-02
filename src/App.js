import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'styles/scss/import.scss';



import Main from 'pages/Main';

import Calc from 'pages/Calc';
import My from 'pages/My';
import Mail from 'pages/Mail';

import NotFound from "pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename= {process.env.PUBLIC_URL} >
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          
          <Route path="/Calc" element={<Calc/>}></Route>
          <Route path="/My" element={<My/>}></Route>
          <Route path="/Mail" element={<Mail/>}></Route>

          <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
