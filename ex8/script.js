// 1. 定義 API 網址 (來自你提供的圖片)
var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

// 2. 建立 XMLHttpRequest 物件
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

// 3. 當請求完成時處理資料
xhr.onreadystatechange = function() {
    // readyState 4: 請求已完成, status 200: 成功
    if (this.readyState == 4 && this.status == 200) {
        var dataset = JSON.parse(this.responseText);
        addNewData(dataset);
    }
};

/**
 * 遍歷資料並動態新增到表格中
 */
function addNewData(dataset) {
    var myTable = document.getElementById("csie").getElementsByTagName('tbody')[0];

    dataset.forEach(function(data, index) {
        // 新增一行在表格末尾
        var row = myTable.insertRow(-1);
        
        // 插入三個單元格 (名稱, 地點, 票價)
        // 注意：地點與票價位於 showInfo 陣列的第一筆資料中
        row.insertCell(0).innerHTML = data['title'];
        row.insertCell(1).innerHTML = data['showInfo'][0]['location'];
        row.insertCell(2).innerHTML = data['showInfo'][0]['price'];
    });
}

/**
 * 點擊按鈕時清除表格中的所有內容 (保留表頭)
 */
function delOldData() {
    var myTableBody = document.getElementById("csie").getElementsByTagName('tbody')[0];
    myTableBody.innerHTML = "";
    console.log("資料已清除");
}