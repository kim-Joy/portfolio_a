import React from "react";
import { useTheme } from "data/ThemeProvider";

function Setting() {
  const { defaultTheme, radioHandleThemeChange,  fontWeight, switchHandlerClick } = useTheme();

  return (
    <div className="setting">
      <section className="setting--section">
        <h3 className="setting--section__title">화면모드</h3>
        <div className="setting__list__group theme">
          <div className="theme__radio__group">
            <label htmlFor="theme_light" className="radio__label theme__label">
              <i className="theme__preview"></i>
              <span className="theme__name">라이트 모드</span>
              <input
                type="radio"
                id="theme_light"
                name="theme"
                className="radio__input"
                value="theme_light"
                checked={defaultTheme === "theme_light"}
                onChange={radioHandleThemeChange}
              />
              
            </label>
          </div>
          <div className="theme__radio__group">
            <label htmlFor="theme_dark" className="radio__label theme__label">
              <i className="theme__preview"></i>
              <span className="theme__name">다크 모드</span>
              <input
                type="radio"
                id="theme_dark"
                name="theme"
                value="theme_dark"
                className="radio__input"
                checked={defaultTheme === "theme_dark"}
                onChange={radioHandleThemeChange}
              />
            </label>
          </div>
        </div>
      </section>

      <section className="setting--section">
        <h3 className="setting--section__title">텍스트</h3>
        <ul className="setting__list__group catalog">
          <li className="catalog__item">
            <span className="catalog__title">텍스트 크기</span>
            <i>입장</i>
          </li>
          <li className="catalog__item">
            <span className="catalog__title">볼드체 텍스트</span>
            <button 
              type="button" 
              className={`switch__box ${fontWeight ? "on" : ""}`}
              onClick={switchHandlerClick}
            >
              <span className="switch__ball"></span>
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Setting;
