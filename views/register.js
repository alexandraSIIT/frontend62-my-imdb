var dataString;

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
            else {if(email){
                var emailRE=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if(!emailRE.test(email)){
                        $("label#email-validation").show();
                        $("input#email").focus();
                        return false; 
                    }}
        
           
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

        dataString = "username=" + name + "&email=" + email + "&password=" + password;
        Register(dataString);
        return false;
    });
});