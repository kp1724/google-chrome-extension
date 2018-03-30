document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('popupClick');
    link.addEventListener('click', function() {
        var newURL = "http://kp1705.wordpress.com/";
        chrome.tabs.create({ url: newURL });
    });
});