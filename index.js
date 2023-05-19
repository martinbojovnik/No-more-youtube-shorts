var RedirectURL = "YOUR URL"

function ChechShorts() {
    var a = window.location.href;
    var urlSegments = a.split('/');
    console.log(urlSegments);
    if(urlSegments[3] == 'shorts'){
        window.location.href = "https://tenor.com/view/rock-one-eyebrow-raised-rock-staring-the-rock-gif-22113367";
    }
}

var t=setInterval(ChechShorts,1000);