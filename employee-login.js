document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
    const form = document.getElementById("loginForm");
    const messageBox = document.getElementById("messageBox");

    loginBtn.addEventListener("click", () => {
        const password = form.password.value.trim();

        // Validate the password field
        if (password === "") {
            alert("Please enter your password!");
            return;
        }

        // Show success message
        messageBox.classList.remove("hidden");

        // Redirect to Home Page after 2 seconds
        setTimeout(() => {
            window.location.href = "home.html";
        }, 2000);
    });
});
