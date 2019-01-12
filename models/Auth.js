// CORRECT ACCESS TOKEN !!!! +1 s

var url = "https://ancient-caverns-16784.herokuapp.com/"
function Register(dataString) {
    $.ajax({
        type: "POST",
        url: url + "auth/register",
        data: dataString,
        success: function (response) {
            console.log(response)
            localStorage.setItem("AccesToken", response.accessToken);
            var usernameReg = document.getElementById('usernameRegister').value;
            document.getElementById('register-dialog').close();
            document.getElementById('success-alert-register').style.display = 'block';
            hideAlert('success-alert-register');
            document.getElementById('register-form').reset();
            displayButtons(usernameReg);
        },
        error: function () {
            $("label#takenUsername").show();
            $("input#usernameRegister").focus();
        }
    })
}

function Login(dataString2) {
    $.ajax({
        type: "POST",
        url: url + "auth/login",
        data: dataString2,
        success: function (response) {
            localStorage.setItem("AccesToken", response.accessToken);
            var username = document.getElementById('usernameLogin').value;
            document.getElementById('login-dialog').close();
            document.getElementById('success-alert-login').style.display = 'block';
            hideAlert('success-alert-login');
            document.getElementById('login-form').reset();
            displayButtons(username);
        },
        error: function (response) {
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
        success: function (response) {
            console.log(response);
            localStorage.removeItem('AccesToken');
            document.getElementById('success-alert-logout').style.display = 'block';
            hideAlert('success-alert-logout');
            hideButtonsAfterLogout();
        }
    })

}

