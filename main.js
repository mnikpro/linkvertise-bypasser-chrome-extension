/*
do a http GET request in 
"https://vacant-curtly-composure.herokuapp.com/bypass2?url=" + current url"
*/



    var url = "https://vacant-curtly-composure.herokuapp.com/bypass2?url=" + window.location.href;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    
    //redirect to the new url
    xhr.onload = () => location.replace("https://google.com/");

    console.log(xhr.response);
    console.log(xhr.response);
    console.log(xhr.response);
    console.log(xhr.response);
    console.log(xhr.response);

