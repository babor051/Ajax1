console.log('this is signup.js');

$(document).ready(function () {
    $(document).on('submit', '#signupForm', function (e) {
        e.preventDefault();

        let name = $('input[name="name"]').val();
        let email = $('input[name="email"]').val();
        let password = $('input[name="password"]').val();

        console.log('form submit clicked');

        let url = '/signup?name=' + name + '&email=' + email + '&password=' + password;
        let req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                console.log(req.responseText);
                if (req.responseText == 'true') {
                    alert('account created');
                    document.getElementById('name').value = "";
                    document.getElementById('email').value = "";
                    document.getElementById('password').value = "";

                }
            }
        }
        req.open("GET", url, true);
        req.send();

    });

    $(document).on('blur', 'input[name="email"]', function () {
        let email = $('input[name="email"]').val();
        let url = '/checkemail?email=' + email;
        let req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (req.responseText == 'true') {
                    // alert('duplicate email. you can not create account');
                    $('input[type="submit"]').attr('disabled', true);
                }
                else {
                    $('input[type="submit"]').removeAttr('disabled');
                }
            }
        }
        req.open("GET", url, true);
        req.send();
    });
});
