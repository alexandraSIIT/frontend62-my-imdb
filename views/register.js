$(function() {
    $(".error").hide();
    $(".register-button").click(function() {
        $(".error").hide();
        var name = $("input#username").val();
            if (name == "") {
                $("label#username-error").show();
                $("input#username").focus();
                return false;
            }

        var email = $("input#email").val();
            if (email == "") {
                $("label#email-error").show();
                $("input#email").focus();
                return false;
            }

        var password = $("input#password").val();
        if (password == "") {
            $("label#password-error").show();
            $("input#password").focus();
            return false;
        }

        var rPassword = $("input#r-password").val();
            if (rPassword == "") {
                $("label#r-password-error").show();
                $("input#r-password").focus();
                return false;
            }

        if (password != rPassword) {
            $("label#match-password").show();
            $("input#r-password").focus();
            return false;
        }

        console.log("click")
        var dataString = "username=" + name + "&email=" + email + "&password=" + password;
        Register(dataString);
        return false;
    });
});