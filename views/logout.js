$(function() {
    $(".logout-button").click(function() {
        var token = localStorage.getItem("AccesToken");
        Logout(token);
        return false;
    })
})