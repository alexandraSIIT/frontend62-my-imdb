var url = "https://ancient-caverns-16784.herokuapp.com/"
function Register(dataString) {
    $.ajax({
        type: "POST",
        url: url + "auth/register",
        data: dataString,
        success: function(response) {
            console.log(response)
            localStorage.setItem("AccesToken", response.accessToken)
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
            localStorage.setItem("AccesToken", response.accessToken)
        },
        error: function(response) {
            if (response.responseJSON.message == "User not found") {
                $("h3#wrong-username").show();  
                $("input#username").focus();
            } else if (response.responseJSON.message == "Wrong password") {
                $("h3#wrong-password").show();  
                $("input#password").focus(); 
            }
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
        }
    })

}

