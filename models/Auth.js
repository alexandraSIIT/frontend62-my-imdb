function Register(dataString) {
    $.ajax({
        type: "POST",
        url: "https://ancient-caverns-16784.herokuapp.com/auth/register",
        data: dataString,
        success: function(response) {
            console.log(response)
            localStorage.setItem("Acces Token", response.accessToken)
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
            localStorage.setItem("Acces Token2", response.accessToken)
        }
    })
}