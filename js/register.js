const URL = "https://reqres.in/api"



let registerForm = document.querySelector(".Register-Form");
let inputEmail = document.querySelector(".input-email");
let inputPassword = document.querySelector(".input-password");




let registerFn = (evt) => {
    evt.preventDefault();

    let emailValue = inputEmail.value;
    let passwordValue = inputPassword.value;

    let data = {

        email: emailValue,
        password: passwordValue
    }
gi
    fetch(`${URL}/register`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(Response => Response.json())
        .then(data => {
            if (data.token) {
                window.localStorage.setItem("token", data.token),
                    window.location.replace("index.html")
            }

        })
}



registerForm.addEventListener('submit', registerFn)