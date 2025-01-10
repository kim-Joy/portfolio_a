import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useDateTime  from "components/StateHook";

import App from 'components/App';
import StackApp from 'components/StackApp';
import SkillStack from 'components/SkillStack';



function Home() {
  
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

  const {day, week } = useDateTime ();

  return (
      <div className="home">
        <ul className="app--list--group">
          <li className="widget">
            <App  
              className="calendar"
              name="캘린더"
            />
            <div className="calendar__absolute">
              <p className="calendar__day">{week}</p>
              <strong className="calendar__dd">{day}</strong>
            </div>
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
              className="mail"
              onClick={handleMail}
              name="mail"
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
             <App  
              className="canvas"
              name="그림판"
            />
          </li>
          <li className="widget">
            <App  
              className="my"
              onClick={handleMy}
              name="my"
            />
          </li>  
          <li>
          <App  
              className="kakaobank"
              onClick={handleKakaobank}
              name="카카오뱅크"
            />
            <App  
              className="balance"
              name="밸런스"
            />
          </li>  
          <li className="widget">
            <App  
              className="todo"
              name="미리알림"
            />
          </li> 
          <li className="widget column">
            <App  
              className="music"
              name="music"
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
            />
          </li>

          <li className="app--stack--group">
            <StackApp />
            <span className="stack--name">취미</span>
          </li> 
          <li className="app--stack--group column">
            <SkillStack />
            <span className="stack--name">skill</span>
          </li> 
        </ul> 
      </div>

  )
} 


export default Home;