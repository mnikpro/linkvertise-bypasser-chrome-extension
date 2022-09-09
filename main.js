/*
do a http GET request in 
"https://vacant-curtly-composure.herokuapp.com/bypass2?url=" + current url 
but only if the site is "https://linkvertise.com/*"
*/
if (window.location.href.startsWith("https://linkvertise.com/")) {
    var url = "https://vacant-curtly-composure.herokuapp.com/bypass2?url=" + window.location.href;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    
}