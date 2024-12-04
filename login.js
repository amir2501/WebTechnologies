const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repeatPassword = document.querySelector('#password-re-type');
const selectedGender = document.querySelector('input[name="gender"]:checked');
const userName = document.querySelector('#userName');

let Storage = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();

    !email.value ? email.classList.add("error") : email.classList.remove("error");
    !password.value ? password.classList.add("error") : password.classList.remove("error");
    !repeatPassword.value ? repeatPassword.classList.add("error") : repeatPassword.classList.remove("error");
    !userName.value ? userName.classList.add("error") : userName.classList.remove("error");

    if (email.value && password.value && repeatPassword.value && userName.value) {
        if (password.length < 6) return alert("Password must be 6 characters long");
        else {
            if (password.value === repeatPassword.value) {
                if (userName.value > 4) {
                    const obj = {
                        email: email.value,
                        password: password.value,
                        createdDate: Date.now(),
                        gender: selectedGender.value ?? "N/A"
                    }
                    Storage.push(obj);
                } else {
                    userName.classList.add("error");
                }
                password.classList.remove("error");
                repeatPassword.classList.remove("error");
            } else {
                alert("please recheck your passwords")
                password.classList.add("error")
                repeatPassword.classList.add("error")
            }
        }

    }
});