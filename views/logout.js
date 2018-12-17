$(function() {
    $(".logout-button").click(function() {
        var token = localStorage.getItem("AccesToken");
        console.log("click")
        Logout(token);
        return false;
    })
})