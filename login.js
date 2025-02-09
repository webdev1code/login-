document.addEventListener("DOMContentLoaded", function() {
    const keys = document.querySelectorAll(".key");
    const deleteKey = document.querySelector(".delete");
    const enterBtn = document.querySelector(".enter-btn");
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");

    keys.forEach(key => {
        key.addEventListener("click", () => {
            if (document.activeElement === usernameField) {
                usernameField.value += key.textContent;
            } else {
                passwordField.value += key.textContent;
            }
        });
    });

    deleteKey.addEventListener("click", () => {
        if (document.activeElement === usernameField) {
            usernameField.value = usernameField.value.slice(0, -1);
        } else {
            passwordField.value = passwordField.value.slice(0, -1);
        }
    });

    enterBtn.addEventListener("click", () => {
        alert("Login attempted with Username: " + usernameField.value + " and Password: " + passwordField.value);
    });
});