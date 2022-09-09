var XMLHttpRequest = require('xhr2');

var url = "https://vacant-curtly-composure.herokuapp.com/bypass2?url=" + "https://linkvertise.com/485679/speed-parkour-map-mcpe/1";
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send();

xhr.onload = () => console.log(xhr.responseText);