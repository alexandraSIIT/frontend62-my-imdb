function Register(dataString) {
    $.ajax({
        type: "POST",
        url: "https://ancient-caverns-16784.herokuapp.com/auth/register", // TODO: move the base url somewhere in a variable and reuse it
        data: dataString,
        success: function(response) {
            console.log(response)
            localStorage.setItem("Acces Token", response.accessToken) // TODO: use local storage keys without spaces
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
        url: "https://ancient-caverns-16784.herokuapp.com/auth/login",
        data: dataString2,
        success: function(response) {
            console.log(response)
            localStorage.setItem("Acces Token2", response.accessToken) // TODO: use the same key as for registration
        }
    })
}
