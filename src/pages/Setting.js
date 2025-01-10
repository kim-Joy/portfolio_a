

function Setting(){
  return(
    <div className="setting">
      <section className="setting--section">
        <h3 className="setting--section__title">화면모드</h3>
        <ul className="theme__mode__group">
          <li className="theme__raido__group">
            <lable for="theme_light">
              <i className="theme__preview"></i>
              <span>라이트 모드</span>
            </lable>
            <input type="radio" id="theme_light" name="theme"/>
          </li>
          <li className="thme__raido__group">
            <lable for="theme_dark">
              <span>다크 모드</span>
            </lable>
            <input type="radio" id="theme_dark" name="theme" checked/>
          </li>
        </ul>
      </section>

      <section className="setting--section">
        <h3 className="visuallyhidden">텍스트</h3>
        <ul className="setting__list__group">
          <li>
            <span>텍스트 크기</span>
            <div className="ㄴㄴ">페이지</div>
          </li>
          <li className="switch__box">
            <span className="">볼드체 텍스트</span>
            <label for="type_bold" className="switch__lable">
              <input type="text" id="type_bold" className="switch__input" />
            </label>
          </li>
        </ul>
      </section>
    </div>
  )
};

export default Setting;