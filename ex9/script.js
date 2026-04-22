// 使用 Page 20 提供的 Flickr API URL
var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

function getimg() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', imglist_Url, true);
    xhr.send();

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            // 分析 Flickr 回傳的 JSON (Page 19 邏輯)
            var data = JSON.parse(this.responseText);
            add_new_img(data);
        } else {
            console.error("API 請求失敗");
        }
    };
}

function add_new_img(dataset) {
    var gallery = document.getElementById('gallery');
    gallery.innerHTML = ""; // 每次點擊清空舊圖

    // Flickr 的照片陣列在 dataset.photos.photo 中
    var photos = dataset.photos.photo;

    photos.forEach(function(item) {
        // 拼接 Flickr 圖片網址 (使用中尺寸 b 或 z)
        var imgUrl = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;
        
        var imgElement = document.createElement('img');
        imgElement.src = imgUrl;
        imgElement.alt = item.title;
        
        gallery.appendChild(imgElement);
    });
}