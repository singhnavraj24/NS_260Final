login();

// Point 6

document.getElementById('disclaimer_btn').addEventListener('click', function () {
    var text ='While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 2020 by Refsnes Data. All Rights Reserved.';
    var disclaimer_text = document.getElementById('disclaimer_text');
    
    if(disclaimer_text.innerText == '') {
        document.getElementById('disclaimer_text').innerText = text;
    } else {
        document.getElementById('disclaimer_text').innerText = '';
    }
});
document.getElementsByClassName('bg-remove')[0].addEventListener('click', function () {
    document.getElementsByClassName('full-banner')[0].style.background = '#000';
});

function login() {
    // reference https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event

    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var passwordInput = document.getElementById('password');
        var emailInput = document.getElementById('email');

        var re = /\S+@\S+\.\S+/;
        var email = re.test(emailInput.value);
        var password = passwordInput.value.length;

        if(email == true && password > 7) {
            emailInput.classList.add("success");
            passwordInput.classList.add("success");

            emailInput.classList.remove("error");
            passwordInput.classList.remove("error");
            document.getElementsByClassName('login-success')[0].classList.add("show");

            setTimeout(function () {
                document.getElementsByClassName('login-success')[0].classList.remove("show");
            }, 5000);

        } else {
            emailInput.classList.remove("success");
            passwordInput.classList.remove("success");

            emailInput.classList.add("error");
            passwordInput.classList.add("error");
        }
    });
}