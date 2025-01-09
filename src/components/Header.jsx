import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import 'styles/scss/header.scss';

function Header() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(()=> {
    const updateDateTime = () => {
      const now = new Date();

      let hours = now.getHours();
      let miuntes = now.getMinutes();
      let seconds = now.getSeconds();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      let weekdays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
      let weekday = weekdays[now.getDay()];

      const formatTime = `${String(hours).padStart(2, "0")} : ${String(miuntes).padStart(2, "0")}`;
      const formatDate = `${month}월 ${day}일 ${weekday}`;
      setTime(formatTime); 
      setDate(formatDate); 

    };

    updateDateTime(); //초기화
    const intervalNow = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalNow)

  }, []);


  return (
    <header className="Header">
      <div className="header--inner">
        <div className="header--left">
          <p className="header--date"><em className="date--time">{time}</em> <em className="date-mmdd">{date}</em></p>
        </div>
        <div className="header--right">
          <span className="header__antenna">
            <em className="antenna antenna1">
              <em className="antenna">
                <em className="antenna">
                </em>
              </em>
            </em>
          </span>
          <span className="header__battery__percent">90%</span>
          <div className="header__battery">
            <em class="header__batteryPower__percent">90</em>
          </div>
        </div>
      </div>
      <div>
        <p>요일</p>
        <strong>시간</strong>
        <div className="">날씨</div>
        <div>
          <p>위로 쓸어올려서 잠금해제</p>
        </div>
      </div>
    </header>

  )
} 



export default Header;