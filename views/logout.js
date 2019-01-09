$(function() {
    $("#logoutBtn").click(function() {
        var token = sessionStorage.getItem("AccesToken");
        Logout(token);
        return false;
    })
})