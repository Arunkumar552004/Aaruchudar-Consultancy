document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const profileDropdown = document.querySelector(".profile-dropdown");

  const imageElement = document.getElementById("profileImageBtn");
  const usernameElement = document.getElementById("profile-username");

  if (!user) {
    profileDropdown.style.display = "none";
  } else {
    if (user.image && user.image !== "") {
      imageElement.src = user.image;
    } else {
      imageElement.style.display = "none";
      usernameElement.style.display = "block";
    }
    usernameElement.textContent = user.username;
  }

  const profileButton = document.getElementById("profile-button");
  const profileMenu = document.getElementById("profile-menu");

  profileButton?.addEventListener("click", () => {
    profileMenu.classList.toggle("show");
  });

  window.addEventListener("click", (e) => {
    if (!profileButton.contains(e.target) && !profileMenu.contains(e.target)) {
      profileMenu.classList.remove("show");
    }
  });
});
