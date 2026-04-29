import React from 'react';

// 1. 定義 changeText 函式
const changeText = (event) => {
  console.log(event.target); // 在控制台查看被點擊的元素
  // 透過直接操作 DOM (雖然 React 通常不建議這樣做，但這是圖片範例的需求)
  event.target.innerText = event.target.innerText + "被點了";
};

// 樣式設定
const styleArgument = { 
  fontSize: '100px', 
  color: 'red',
  lineHeight: '1.2' // 建議設定 1.2 ~ 1.5 之間，文字就不會重疊了
};

function App() {
  return (
    <div className="App">
      {/* 2. 綁定 style 與 onClick 事件 */}
      <h1 style={styleArgument} onClick={changeText}>
        hello CGU!!
      </h1>
    </div>
  );
}

export default App;