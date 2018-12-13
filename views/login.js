$(function() {
    $(".error").hide();
    $(".button2").click(function() {
        $(".error").hide();
        var name2 = $("input#username2").val();
        var password2 = $("input#password2").val();
        
        var dataString2 = "username=" + name2 + "&password=" + password2;
        Login(dataString2);
        return false;
    });
});