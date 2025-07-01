// auth.js (Modified for Server API)

async function signup() {
  const user = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    phone: document.getElementById("phone").value,
    role: document.getElementById("role").value,
    gender: document.getElementById("gender").value,
    dob: document.getElementById("dob").value,
    address: document.getElementById("address").value,
    image: document.getElementById("imagePreview").src,
    college: document.getElementById("college").value,
    company: document.getElementById("company").value,
  };

  try {
    const res = await fetch(
      "https://your-backend-url.onrender.com/api/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("currentUser", JSON.stringify(data.user));
      alert("Signup successful!");
      window.location.href = "view-profile.html";
    } else {
      document.getElementById("errorMessage").innerText = data.error;
    }
  } catch (err) {
    console.error("Signup error:", err);
    document.getElementById("errorMessage").innerText = "Something went wrong.";
  }
}


async function signin() {
  const credentials = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(credentials),
    });

    if (res.ok) {
      const user = await res.json();
      window.location.href = "home.html";
    } else {
      const err = await res.json();
      document.getElementById("errorMessage").innerText =
        err.message || "Login failed";
    }
  } catch (err) {
    document.getElementById("errorMessage").innerText =
      "Error connecting to server";
  }
}

function toggleRoleFields() {
  const role = document.getElementById("role").value;
  document.getElementById("student-field").style.display =
    role === "student" ? "block" : "none";
  document.getElementById("professional-field").style.display =
    role === "professional" ? "block" : "none";
}
