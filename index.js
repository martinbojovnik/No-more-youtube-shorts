var RedirectURL = "YOUR URL"

function ChechShorts() {
    var a = window.location.href;
    var urlSegments = a.split('/');
    console.log(urlSegments);
    if(urlSegments[3] == 'shorts'){
        window.location.href = RedirectURL;
    }
}

var t=setInterval(ChechShorts,1000);
