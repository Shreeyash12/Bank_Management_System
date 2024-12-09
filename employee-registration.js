document.addEventListener("DOMContentLoaded", () => {
    const registerBtn = document.getElementById("registerBtn");
    const form = document.getElementById("employeeForm");
    const acknowledgment = document.getElementById("acknowledgment");
    const employeeIDSpan = document.getElementById("employeeID");
    const employeeNameSpan = document.getElementById("employeeName");
    const employeeEmailSpan = document.getElementById("employeeEmail");

    registerBtn.addEventListener("click", () => {
        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();
        const confirmPassword = form.confirmPassword.value.trim();
        const address = form.address.value.trim();
        const contactNumber = form.contactNumber.value.trim();

        // Validate Password Match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Generate Random Employee ID
        const employeeID = Math.floor(1000000 + Math.random() * 9000000);

        // Show Acknowledgment
        employeeIDSpan.textContent = employeeID;
        employeeNameSpan.textContent = `${firstName} ${lastName}`;
        employeeEmailSpan.textContent = email;

        form.reset();
        form.classList.add("hidden");
        acknowledgment.classList.remove("hidden");
    });
});
