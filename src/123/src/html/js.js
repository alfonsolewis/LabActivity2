function fnLogin() {
    var oUname = document.getElementById("uname")
    var oUpass = document.getElementById("upass")
    var oError = document.getElementById("error_box")
    var isError = true;
    if (oUname.value.length > 20 || oUname.value.length < 6) {
        oError.innerHTML = "needs to be 6 to 20 characters";
        isError = false;
        return;
    }else if((oUname.value.charCodeAt(0)>=48) && (oUname.value.charCodeAt(0)<=57)){
        oError.innerHTML = "the first character needs to be a letter";
        return;
    }else for(var i=0;i<oUname.value.charCodeAt(i);i++){
        if((oUname.value.charCodeAt(i)<48)||(oUname.value.charCodeAt(i)>57) && (oUname.value.charCodeAt(i)<97)||(oUname.value.charCodeAt(i)>122)){
            oError.innerHTML = "must be letter with number";
            return;
        }
    }


    window.alert("log in succeed")
}