let count = 1; // 計數器，用來標記按鈕編號

function addfunction() {
    // 1. 建立一個新的 <button> 元素
    var btn = document.createElement("BUTTON");
    
    // 2. 設定按鈕內容與樣式
    btn.innerHTML = `CLICK ME (${count})`;
    btn.setAttribute("id", "btn_" + count); // 設定唯一 ID，例如 btn_1, btn_2
    btn.setAttribute("class", "btn btn-outline-danger m-1"); // 加入 Bootstrap 樣式
    
    // 3. 將按鈕加入到 body 中 (或指定的 container)
    document.body.appendChild(btn);
    
    // 4. 印出 log 方便觀察 (如第 28 頁所示)
    console.log(btn);
    
    // 5. 計數器加 1
    count++;
}

function delfunction() {
    // 檢查是否還有按鈕可以刪除
    if (count > 1) {
        count--; // 先將計數器減回前一個數字
        
        // 透過 ID 找到剛才產生的那個按鈕
        var btn = document.getElementById("btn_" + count);
        
        if (btn) {
            // 從 body 中移除該元素
            document.body.removeChild(btn);
            console.log("Deleted: btn_" + count);
        }
    } else {
        console.log("No more buttons to delete!");
    }
}