import React, { useState, useEffect } from 'react';

import memoji_thumb_A from "assets/images/my_a.png";
import memoji_thumb_B from "assets/images/my_b.png";

const MEMOJI_A = <img src={memoji_thumb_A} className="thumb--image" alt="미모지 이미지" />;

function My() {
  const [isCard, setIsCard] = useState(false);
  const [isEffect, setIsEffect] = useState(true); 

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsEffect(false); 
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  const cardClick = () => {
    setIsCard(!isCard); 
  };

  return (
    <div className="my">
      <div onClick={cardClick} className={`${isEffect ? 'on' : ''} my--card--wrapper ${isCard ? "active" : ""}`} >
        <div
          className={`my--card my--card--front `}
        >
          <div className="my__card__header">
            <strong className="card__type">A</strong>
            <p className="card__summary">Web publishing</p>
          </div>
          <div className="my__card__body">
            {MEMOJI_A}
            <div className="card__info">
              <h3 className="card__info__title">디지털 예술 트렌드에<br />적응하고 싶은</h3>
              <strong className="card__info__accent">트렌트 지향형 김조희</strong>
            </div>
          </div>
          <div className="my__card__dashboard">
            <ul className="dashboard__graph">
              <li className="graph">
                <span className="graph__title">기부 관심도</span>
                <span className="graph__box"><em className="graph_bar" style={{width: '80%'}}></em></span>
                <span className="graph__persent">80%</span>
              </li>
              <li className="graph">
                <span className="graph__title">NFT 경험치</span>
                <span className="graph__box"><em className="graph_bar" style={{width: '50%'}}></em></span>
                <span className="graph__persent">50%</span>
              </li>
            </ul>
            <ul className="dashboard__hashtag">
              <li>
                <span className="hashtag">#쾌활한한</span>
                <span className="hashtag">#활동적인인</span>
              </li>
              <li><span className="hashtag">#선한영향력</span></li>
            </ul>
          </div>
        </div>
        <div className="my--card my--card--back">
          <div className="my__card__header">
            <strong className="card__type">B</strong>
            <p className="card__summary">Web publishing</p>
          </div>
          <div className="my__card__body">
            <img src={memoji_thumb_B} className="thumb--image" alt="미모지 이미지" />
            <div className="card__info">
              <h3 className="card__info__title">예술과 사회적 이슈에에<br />관심이 많많은</h3>
              <strong className="card__info__accent">사회 비판형 김조희</strong>
            </div>
          </div>
          <div className="my__card__dashboard">
            <ul className="dashboard__graph">
              <li className="graph">
                <span className="graph__title">기부 관심도</span>
                <span className="graph__box"><em className="graph_bar" style={{width: '80%'}}></em></span>
                <span className="graph__persent">80%</span>
              </li>
              <li className="graph">
                <span className="graph__title">NFT 경험치</span>
                <span className="graph__box"><em className="graph_bar" style={{width: '50%'}}></em></span>
                <span className="graph__persent">50%</span>
              </li>
            </ul>
            <ul className="dashboard__hashtag">
              <li>
                <span className="hashtag">#따뜻한 AI</span>
                <span className="hashtag">#예술좋아아</span>
              </li>
              <li><span className="hashtag">#선한오지랖랖</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my--manual">
        <h3 className="manual__title">Needs</h3>
        <ul className="manual--list">
          <li>칭찬에 약합니다.</li>
        </ul>
      </div>
    </div>
  );
}

export default My;
