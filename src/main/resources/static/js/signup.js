function signup() {
    const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    fetch("http://localhost:8080/api/users/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
        window.location.href = "login.html";
    });
}
