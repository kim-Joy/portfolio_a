import React, { useState, useEffect } from 'react';

import memoji_thumb_A from "assets/images/my_a.png";
import memoji_thumb_B from "assets/images/my_b.png";

const MEMOJI_A = <img src={memoji_thumb_A} className="thumb--image" alt="미모지 이미지" />;

function My() {
  const [isCard, setIsCard] = useState(false);
  const [isEffect, setIsEffect] = useState(true);
  const [isFront_A, setIsFront_A] = useState(0); 
  const [isFront_B, setIsFront_B] = useState(0);
  const [isBack_A, setIsBack_A] = useState(0);
  const [isBack_B, setIsBack_B] = useState(0);

      
  const animationTimer = setTimeout(() => {
    setIsFront_A(50); 
    setIsFront_B(80); 
    setIsBack_A(10); 
    setIsBack_B(100); 
  }, 1000);

  useEffect(() => {
     const effectTimer = setTimeout(() => {
       setIsEffect(false);
     }, 1000);

    return () => {
      clearTimeout(effectTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  const cardClick = () => {
    setIsCard(!isCard);
  };

  return (
    <div className="my">
      <div onClick={cardClick} className={`${isEffect ? 'on' : ''} my--card--wrapper ${isCard ? "active" : ""}`} >
        <div className={`my--card my--card--front`}>
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
                <span className="graph__box">
                  <em className="graph_bar" style={{ width: `${isFront_A}%` }}></em>
                </span>
                <span className="graph__percent">{isFront_A}%</span>
              </li>
              <li className="graph">
                <span className="graph__title">NFT 경험치</span>
                <span className="graph__box">
                  <em className="graph_bar" style={{ width: `${isFront_B}%` }}></em>
                </span>
                <span className="graph__percent">{isFront_B}%</span>
              </li>
            </ul>
          </div>
          <div className="my--manual">
            <h3 className="manual--title">Needs</h3>
            <ul className="manual--list list--style circl">
              <li>칭찬에 약합니다.</li>
              <li>칭찬에 약합니다.</li>
              <li>칭찬에 약합니다.</li>
              <li>칭찬에 약합니다.</li>
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
              <h3 className="card__info__title">예술과 사회적 이슈에<br />관심이 많은</h3>
              <strong className="card__info__accent">사회 비판형 김조희</strong>
            </div>
          </div>
          <div className="my__card__dashboard">
            <ul className="dashboard__graph">
              <li className="graph">
                <span className="graph__title">기부 관심도</span>
                <span className="graph__box">
                  <em className="graph_bar" style={{ width: `${isBack_A}%` }}></em>
                </span>
                <span className="graph__percent">{isBack_A}%</span>
              </li>
              <li className="graph">
                <span className="graph__title">NFT 경험치</span>
                <span className="graph__box">
                  <em className="graph_bar" style={{ width: `${isBack_B}%` }}></em>
                </span>
                <span className="graph__percent">{isBack_B}%</span>
              </li>
            </ul>
          </div>
          <div className="my--manual">
            <h3 className="manual--title">Needs</h3>
            <ul className="manual--list list--style circl">
              <li>칭찬에 약합니다.</li>
              <li>칭찬에 약합니다.</li>
              <li>칭찬에 약합니다.</li>
              <li>칭찬에 약합니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default My;
