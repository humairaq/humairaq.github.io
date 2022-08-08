
// Document is ready
$(document).ready(function (){
    $("#contact-name-error").hide();
    let nameError = true;
    $("#name").keyup(function(){
        validateName();
    });

    function validateName(){
        let nameValue = $("#name").val();
        if(nameValue.length === ""){
            $("#contact-name-error").show();
            nameError = false;
            return false;
        } else{
            $("#contact-name-error").hide();
        }
    }

    $("#contact-email-error").hide();
    let emailError = true;
    $("#email").keyup(function(){
        validateEmail();
    });
    function validateEmail() {
        const email = document.getElementById("email");
        email.addEventListener("blur", () => {
            let regex =  /^([a-zA-Z\d_.+-])+\@(([a-zA-Z\d-])+\.)+([a-zA-Z\d]{2,4})+$/;
            let s = email.value;
            if (regex.test(s)) {
                email.classList.remove("is-invalid");
                emailError = true;
            }
            else {
                email.classList.add("is-invalid");
                emailError = false;
            }
        });
    }

    $("#submit").click(function(){
        validateName();
        validateEmail();
        if(nameError === true && emailError === true){
            return true
        } else{
            return false;
        }
    });
});