import React from 'react';


function App(prop) {
  return (
      <button 
        type="button"
        className={`app__btn app__btn__${prop.className}`}
        onClick={prop.onClick}
      >
        <div class="app__btn__bgColor">
          <i className="app__btn__icon"></i>
        </div>
        <span className="app__btn__name">{prop.name}</span>
      </button>
  )
} 


export default App;