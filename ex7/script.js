// 輔助函式：產生 a-z 亂數字串
function getRandomChars(count) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < count; i++) {
        result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return result;
}

const container = document.getElementById("container");
const errorDisplay = document.getElementById("error-num");
let errorCount = 0; // 記錄連續打錯次數

// 初始化
window.onload = function() {
    container.textContent = getRandomChars(Math.floor(Math.random() * 3)); // 0~2個字
    container.focus();
};

// 監聽鍵盤事件
window.addEventListener("keydown", function(e) {
    // 排除功能鍵
    if (e.key.length > 1) return;

    // 取得目前文字 (使用 textContent 較穩定)
    let currentStr = container.textContent.trim();
    
    // 檢查是否打對首字
    if (currentStr.length > 0 && e.key === currentStr[0]) {
        // 打對了：消除首字並重置「連續」打錯計數
        currentStr = currentStr.substring(1);
        errorCount = 0; 
    } else {
        // 打錯了：連續打錯次數 +1
        errorCount++;
    }

    // 基礎邏輯：每次按鍵固定增加 1~3 個字
    let bonusChars = getRandomChars(Math.floor(Math.random() * 3) + 1);
    
    // --- ex#7 新增要求 ---
    // 連續打錯三次時，再額外增加 3 個亂數產生的字串
    if (errorCount === 3) {
        const penaltyChars = getRandomChars(3);
        bonusChars += penaltyChars; // 將懲罰字串接在原本要增加的字串後面
        errorCount = 0; // 觸發處罰後，重新計算連續次數
        console.log("連續打錯三次！懲罰增加字串。");
    }

    // 更新畫面
    container.textContent = currentStr + bonusChars;
    errorDisplay.textContent = errorCount; // 更新畫面的計數顯示

    e.preventDefault(); // 防止預設輸入行為
});