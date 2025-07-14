function signin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorElement = document.getElementById("errorMessage");
  errorElement.textContent = "";

  if (!email || !password) {
    errorElement.textContent = "Both fields are required";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "home.html";
  } else {
    errorElement.textContent = "Invalid email or password";
  }
}

function signup() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const role = document.getElementById("role").value;
  const college = document.getElementById("college").value.trim();
  const company = document.getElementById("company").value.trim();
  const gender = document.getElementById("gender").value;
  const dob = document.getElementById("dob").value;
  const errorElement = document.getElementById("errorMessage");
  errorElement.textContent = "";

  if (
    !username ||
    !email ||
    !password ||
    !phone ||
    !role ||
    !gender ||
    !dob
  ) {
    errorElement.textContent = "All fields are required";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorElement.textContent = "Please enter a valid email address";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find((user) => user.email === email)) {
    errorElement.textContent = "Email already registered";
    return;
  }

  const newUser = {
    username,
    email,
    password,
    phone,
    role,
    college,
    company,
    gender,
    dob,
    image: typeof croppedImage !== "undefined" ? croppedImage : "",
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "signin.html";
}

const profileToggle = document.querySelector(".profile-toggle");
const profileDropdown = document.querySelector(".profile-dropdown");

if (profileToggle) {
  profileToggle.addEventListener("click", () => {
    profileDropdown.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    if (
      !profileDropdown.contains(event.target) &&
      !profileToggle.contains(event.target)
    ) {
      profileDropdown.classList.remove("active");
    }
  });
}

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser && document.getElementById("usernameDisplay")) {
  document.getElementById("usernameDisplay").textContent =
    currentUser.username || "User";
}

function editProfile() {
  alert("Redirect to profile edit page or modal.");
}

//
// ✅ MAIN LOGIN PROTECTION LOGIC
//
// (function () {
//   const publicPages = [
//     "home.html",
//     "about.html",
//     "contact.html",
//     "signup.html",
//     "signin.html",
//   ];

//   const currentPage = window.location.pathname.split("/").pop();
//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));

//   if (!publicPages.includes(currentPage) && !currentUser) {
//     window.location.href = "signin.html";
//   }
// })();
