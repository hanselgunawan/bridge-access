var Cookie = {};

function parseCookieStr(cookieStr) {
    var cookieArr = [];
    cookieArr = cookieStr.split(";");
    cookieArr.forEach(data => {
        let keyValue = [];
        keyValue = data.split("=");
        Cookie[keyValue[0]] = keyValue[1];
    });
}

$(document).ready(function() {
    cookieStr = "user_id=1;email=hahaha@gmail.com;user_role=supervisor;company_id=2";//document.cookie
    parseCookieStr(cookieStr);
});