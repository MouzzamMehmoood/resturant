// ===============================
// Login Popup
// ===============================

const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");
const closeBtn = document.querySelector(".close-btn");

// Open popup
loginBtn.addEventListener("click", () => {
    loginPopup.style.display = "flex";
});

// Close popup using X button
closeBtn.addEventListener("click", () => {
    loginPopup.style.display = "none";
});

// Close popup when clicking outside the login box
window.addEventListener("click", (e) => {
    if (e.target === loginPopup) {
        loginPopup.style.display = "none";
    }
});

// Close popup with the Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        loginPopup.style.display = "none";
    }
});

// Prevent form submission (demo only)
const loginForm = document.querySelector(".login-box form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Login Successful!");

    loginPopup.style.display = "none";
    loginForm.reset();
});