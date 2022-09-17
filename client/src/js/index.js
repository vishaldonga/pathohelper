const getFiles = (input) => {
    //TODO
}
const login = () => {
    return 'aaa';
}

$(document).ready(function(){   
   $(".btn-next").on("click", function() {
    if (document.getElementById('otp-field').style.display === 'none') {
        document.getElementById('otp-field').style.display = 'block';
        document.getElementById('otp-button').innerHTML = '<i class="fa fa-sign-in"></i> Log In';
    } else {
        login();
    }
   
   });
});