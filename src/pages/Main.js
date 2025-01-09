import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import App from 'components/App';
import StackApp from 'components/StackApp';
import FaceId from 'components/FaceId';


function Main() {
  const navigate = useNavigate();
  const handleCalc = () => navigate('/Calc');
  const handleMy = () => navigate('/My');
  const handleMail = () => navigate('/Mail');
  const handleKakaobank = () => navigate('/KakaoBank');
  const handleSetting = () => navigate('/Setting');

  const handleEditodo = () => {
    window.open('https://kim-joy.github.io/editodo/', '_blank')
  };
  const handleDubuck = () => {
    window.open('https://kim-joy.github.io/dubuck_2024/', '_blank')
  };

  const [showFaceId, setShowFaceId] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem('faceIdShown')) {
      const faceLoading = setTimeout(() => {
        setShowFaceId(false);
        sessionStorage.setItem('faceIdShown', 'true');
      }, 3000);

      return () => clearTimeout(faceLoading);
    } else {
      setShowFaceId(false);  
    }
  }, []);

  return (
      <div className="Main">
        <ul className="app--list--group">
          <li className="widget">
            <App  
              className="my"
              onClick={handleMy}
              name="my"
            />
          </li>  
          <li>
            <App  
            className="setting"
            onClick={handleSetting}
            name="설정"
            />
            <App  
            className="calc"
            onClick={handleCalc}
            name="계산기"
            />
            <App  
            className="facetime"
            name="FaceTime"
            />
            <App  
              className="maill"
              onClick={handleMail}
              name="Maill"
            />
          </li> 
          <li>
            <App  
              className="editodo"
              onClick={handleEditodo}
              name="EdiTodo"
            />
            <App  
              className="dubuck"
              onClick={handleDubuck}
              name="두벅이"
            />
          </li>
          <li className="app--group">
             <App  
              className="todo"
              name="미리알림"
            />
            <App  
              className="memo"
              name="메모"
            />

            <App  
              className="book"
              name="도서"
            /><App  
              className="book"
              name="도서"
            />
          </li>
          
          <li>
            <App  
              className="canvas"
              name="그림판"
            />
            <App  
              className="kakaobank"
              onClick={handleKakaobank}
              name="카카오뱅크"
            />
          </li> 
          <li className="app--stack--group">
            <StackApp />
            <span className="stack--name">취미</span>
          </li> 
          <li>
            <App  
              className="skill"
              name="Skill"
            />
            <App  
              className="balance"
              name="밸런스"
            />
          </li>  
          
        </ul> 

        {showFaceId &&  <FaceId /> }
      </div>

  )
} 


export default Main;