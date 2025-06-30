document.addEventListener("DOMContentLoaded", () => {
  const courseContainer = document.getElementById("myLearningCourses");
  const searchInput = document.getElementById("searchInput");

  function loadCourses() {
    courseContainer.innerHTML = "";
    const myCourses = JSON.parse(localStorage.getItem("myLearning")) || [];
    const searchText = searchInput.value.toLowerCase();

    const filteredCourses = myCourses.filter((course) =>
      course.name.toLowerCase().includes(searchText)
    );

    if (filteredCourses.length === 0) {
      courseContainer.innerHTML =
        "<p style='text-align:center;'>You haven't enrolled in any courses yet.</p>";
      return;
    }

    filteredCourses.forEach((course, index) => {
      const card = document.createElement("div");
      card.className = "card";

      const image = document.createElement("img");
      image.src = course.image;
      card.appendChild(image);

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
      cardBody.innerHTML = `
        <div class="card-title">${course.name}</div>
        <div class="card-text">Enrolled On: ${course.enrolledOn}</div>
        <div class="button-group" style="display: flex; gap: 10px;">
          <button class="view-btn" onclick="viewCourse('${course.name}')">View Course</button>
          <button class="remove-btn" onclick="removeCourse(${index})">Remove</button>
          <button class="dashboard-btn" onclick="loadDashboardForCourse('${course.name}')">View Dashboard</button>
        </div>`;

      card.appendChild(cardBody);
      courseContainer.appendChild(card);
    });
  }

  searchInput.addEventListener("input", loadCourses);

  window.removeCourse = function (index) {
    const myCourses = JSON.parse(localStorage.getItem("myLearning")) || [];
    myCourses.splice(index, 1);
    localStorage.setItem("myLearning", JSON.stringify(myCourses));
    loadCourses();
  };

  window.viewCourse = function (courseName) {
    const encodedName = encodeURIComponent(courseName);
    window.location.href = `index.html?courseName=${encodedName}&source=mylearning`;
  };

  window.loadDashboardForCourse = function (courseName) {
    const userEmail = localStorage.getItem("userEmail");
    const iframe = document.getElementById("powerbiFrame");
    if (!userEmail || !courseName || !iframe) return;
    const encodedCourse = encodeURIComponent(courseName);
    iframe.src = `https://app.powerbi.com/view?r=YOUR_REPORT_ID&filter=UserTable/UserEmail eq '${userEmail}' and CourseTable/CourseName eq '${encodedCourse}'`;
  };

  loadCourses();
});
