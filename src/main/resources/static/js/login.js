function login() {
    const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.text())
    .then(data => {
        if (data === "Login successful") {
            window.location.href = "dashboard.html";
        } else {
            alert(data);
        }
    });
}
