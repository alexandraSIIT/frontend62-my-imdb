var url = "https://ancient-caverns-16784.herokuapp.com/"
function Register(dataString) {
    $.ajax({
        type: "POST",
<<<<<<< HEAD
        url: url + "auth/register",
        data: dataString,
        success: function(response) {
            console.log(response)
            localStorage.setItem("AccesToken", response.accessToken)
=======
        url: "https://ancient-caverns-16784.herokuapp.com/auth/register", // TODO: move the base url somewhere in a variable and reuse it
        data: dataString,
        success: function(response) {
            console.log(response)
            localStorage.setItem("Acces Token", response.accessToken) // TODO: use local storage keys without spaces
>>>>>>> 472e842b377c705890944b59e4ae36c24a474dc7
        },
        error: function() {
            $("h3#taken-username").show();
            $("input#username").focus();
        }
    })
}

function Login(dataString2) {
    $.ajax({
        type: "POST",
        url: url +"auth/login",
        data: dataString2,
        success: function(response) {
            console.log(response)
<<<<<<< HEAD
            localStorage.setItem("AccesToken", response.accessToken)
        }
    })
}

function Logout(token) {
    $.ajax({
        type: "GET",
        url: url + "auth/logout",
        headers: {
            "x-auth-token": token
        },
        success: function(response) {
            console.log(response);
=======
            localStorage.setItem("Acces Token2", response.accessToken) // TODO: use the same key as for registration
>>>>>>> 472e842b377c705890944b59e4ae36c24a474dc7
        }
    })
}
