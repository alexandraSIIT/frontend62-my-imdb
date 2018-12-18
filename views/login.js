$(function() {
    $(".error").hide();
    $(".login-button").click(function() {
        $(".error").hide();
        var name = $("input#username").val();
        if (name == "") {
            $("label#username-error").show();
            $("input#username").focus();
            return false;
        }

        var password = $("input#password").val();
        if (password == "") {
            $("label#password-error").show();
            $("input#password").focus();
            return false;
        }
        console.log("click")
        var dataString2 = "username=" + name + "&password=" + password;
        Login(dataString2);
        return false;
    });
});

