

function Setting(){
  return(
    <div className="setting">
      <section className="setting--section">
        <h3 className="setting--section__title">화면모드</h3>
        <ul>
          <li className="thme__raido__group">
            <lable for="theme_light">
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
    </div>
  )
};

export default Setting;