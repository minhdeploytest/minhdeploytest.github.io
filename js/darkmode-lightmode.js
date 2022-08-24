// This function creates a cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// This function returns the value of the cookies
function getCookie(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' '){
            c = c.substring(1);
        }
 
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// This function deletes a Cookie, with name of the Cookie as an argument
function delete_cookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function darkify() {
    setCookie('dark', 'dark-theme', 7);
    console.log('darkkkk');

    var element = document.getElementById("the-body");
    element.classList.add("dark-theme");
}

// This function is run after reloading the web (linked to 
// the onload attribute in the html file) 
function loadWeb(){

    console.log(getCookie('dark'))

    var element = document.getElementById("the-body");
    element.classList.add("dark-theme");

    // If Cookie of Dark Mode still exists, add the class that 
    // contains the dark mode css to the element
    if(getCookie("dark") == "dark-theme"){
        console.log('checkkk')
        element.classList.add("dark-theme");
    }

    // If not, remove the class for Dark Mode from the element
    else{
        element.classList.remove("dark-theme");
    }
}

function lightify() {
    delete_cookie("dark");
    console.log('light');
    var element = document.getElementById("the-body");
    element.classList.remove("dark-theme");
}

