function getUrlParameterValue(url, parameter) {
    var urlParams = new URLSearchParams(url.split('?')[1]);
    return urlParams.get(parameter);
}

var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

console.log(getUrlParameterValue(url, "utm_medium")); // will return "webplugin"
console.log(getUrlParameterValue(url, "utm_campaign")); // will return "poweredby"
