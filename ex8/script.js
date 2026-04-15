// 資料庫定義
var d = ["資工系", "資工系", "資工系", "資工系", "資工系", "資工系"];
var c = ["物件導向軟體設計", "計算機網路實驗", "作業系統實務", "生物統計", "通訊系統", "軟硬體專題(2)"];
var t = ["黃崇源", "李春良", "張哲維", "陳光武", "陳仁暉", "魏志達"];

var i = 0; // 用來追蹤目前要新增哪一筆

// 按下 addNewData 時執行的函式
function addOneData() {
    var myTable = document.getElementById("csie");

    // 檢查是否還有資料
    if (i < d.length) {
        // insertRow(-1) 代表在表格最後新增一列
        var row = myTable.insertRow(-1);
        
        // 依序插入三個儲存格
        row.insertCell(0).innerHTML = d[i];
        row.insertCell(1).innerHTML = c[i];
        row.insertCell(2).innerHTML = t[i];

        console.log("新增了第 " + (i + 1) + " 筆資料");
        i++; // 索引值加 1，下次按會抓下一筆
    } else {
        alert("已經沒有更多課程資料囉！");
    }
}

// 按下 delOldData 時執行的函式
function delOldData() {
    var myTable = document.getElementById("csie");
    var rowCount = myTable.rows.length;

    // rowCount > 1 是為了保留第一列(thead 標題列)
    if (rowCount > 1) {
        // 刪除目前表格中的最後一列
        myTable.deleteRow(-1);
        
        // 如果你希望刪除後，下次新增能「補回」剛才刪掉的那一筆，可以把 i--
        // 但通常實作是持續增加，這裡看你的需求
        if (i > 0) i--; 
        
        console.log("已刪除最後一筆資料");
    } else {
        alert("表格已經空了！");
    }
}