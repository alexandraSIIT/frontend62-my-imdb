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
            $("label#takenUsername").show();
            $("input#usernameRegister").focus();
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
                $("label#usernameLoginWrong").show();  
                $("input#usernameLogin").focus();
            } else if (response.responseJSON.message == "Wrong password") {
                $("label#passwordLoginWrong").show();  
                $("input#passwordLogin").focus(); 
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

