window.onload = function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    alert("User not logged in");
    return;
  }

  document.getElementById("username").value = currentUser.username || "";
  document.getElementById("email").value = currentUser.email || "";
  document.getElementById("phone").value = currentUser.phone || "";
  document.getElementById("role").value = currentUser.role || "";
  document.getElementById("gender").value = currentUser.gender || "";
  document.getElementById("dob").value = currentUser.dob || "";
  document.getElementById("address").value = currentUser.address || "";

  if (currentUser.role === "student") {
    document.getElementById("college").value = currentUser.college || "";
    document.getElementById("college").style.display = "inline-block";
    document.getElementById("company").style.display = "none";
  } else if (currentUser.role === "professional") {
    document.getElementById("company").value = currentUser.company || "";
    document.getElementById("company").style.display = "inline-block";
    document.getElementById("college").style.display = "none";
  } else {
    document.getElementById("college").style.display = "none";
    document.getElementById("company").style.display = "none";
  }

  const profileImage = document.getElementById("profileImage");
  if (currentUser.image && currentUser.image.startsWith("data:image")) {
    profileImage.src = currentUser.image;
  } else {
    profileImage.style.display = "none";
  }
};

// optional: if user changes role in dropdown (dynamic show/hide)
document.getElementById("role").addEventListener("change", () => {
  const role = document.getElementById("role").value;
  if (role === "student") {
    document.getElementById("college").style.display = "inline-block";
    document.getElementById("company").style.display = "none";
  } else if (role === "professional") {
    document.getElementById("company").style.display = "inline-block";
    document.getElementById("college").style.display = "none";
  } else {
    document.getElementById("college").style.display = "none";
    document.getElementById("company").style.display = "none";
  }
});

function saveChanges() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const updatedUser = {
    ...currentUser,
    username: document.getElementById("username").value,
    phone: document.getElementById("phone").value,
    role: document.getElementById("role").value,
    gender: document.getElementById("gender").value,
    dob: document.getElementById("dob").value,
    address: document.getElementById("address").value,
    image: document.getElementById("profileImage").src,
  };

  if (updatedUser.role === "student") {
    updatedUser.college = document.getElementById("college").value;
    updatedUser.company = "";
  } else if (updatedUser.role === "professional") {
    updatedUser.company = document.getElementById("company").value;
    updatedUser.college = "";
  }

  localStorage.setItem("currentUser", JSON.stringify(updatedUser));

  const index = users.findIndex(u => u.email === updatedUser.email);
  if (index !== -1) {
    users[index] = updatedUser;
    localStorage.setItem("users", JSON.stringify(users));
  }

  alert("Profile updated successfully!");
}
