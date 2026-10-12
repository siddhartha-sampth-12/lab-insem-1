
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (savedUser === null) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        document.getElementById("message").innerHTML = "Account saved!";
    }
    else if (user === savedUser && pass === savedPass) {
        document.getElementById("message").innerHTML = "Login successful!";
    }
    else {
        document.getElementById("message").innerHTML = "Invalid username or password!";
    }
});
