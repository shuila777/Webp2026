// 輔助函式：產生指定長度的 a-z 亂數組合成的字串
function getRandomChars(min, max) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    const length = Math.floor(Math.random() * (max - min + 1)) + min;
    for (let i = 0; i < length; i++) {
        result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return result;
}

const container = document.getElementById("container");

// 2. window.onload 時，產生 0 到 2 個字元
window.onload = function() {
    container.innerText = getRandomChars(0, 2);
    container.focus(); // 網頁開啟後自動聚焦
};

// 使用 keydown 能比 keyup 更精準地攔截輸入
window.addEventListener("keydown", function(e) {
    // 忽略 Shift, Ctrl 等功能鍵
    if (e.key.length > 1) return;

    // 1. 取得目前的字串並去除首尾空白
    let currentStr = container.innerText.trim();

    // 2. 實作要求 3：打入字元和第一個字相等時，消除該字元
    if (currentStr.length > 0 && e.key === currentStr[0]) {
        // 符合條件，去掉第一個字
        currentStr = currentStr.substring(1);
    } else {
        // 如果不相等，原本的字串不做變動 (或是你可以根據需求決定不相等要不要加新字)
        // 這裡依照你的描述：只要按下按鍵，不論對錯都會往後加
    }

    // 3. 實作要求 4：產生 a-z 的 1 到 3 個字元接在字串後
    const newChars = getRandomChars(1, 3);
    
    // 4. 更新畫面：剩下的舊字串 + 新產生的字串
    container.innerText = currentStr + newChars;

    // 防止瀏覽器預設行為（例如在某些元素中輸入字元）
    e.preventDefault();
});