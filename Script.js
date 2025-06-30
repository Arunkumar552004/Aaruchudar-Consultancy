const courses = [
  {
    name: "Empowering Human Intelligence – 7-Day Online Course",
    description:
      "This course focuses on empowering human intelligence in just 7 days.",
    goal: "Goal: Activate the brain, enhance natural intelligence, and reduce digital/AI dependency.",
    modules: [
      {
        name: "Wake Up the Mind",
        desc: "Overview of human cognitive capabilities and ways to enhance them.",
      },
      {
        name: "Self Awareness & Mindset",
        desc: "Developing self-awareness and adopting a growth-oriented mindset.",
      },
      {
        name: "Communication Skills",
        desc: "Building effective communication for personal and professional success.",
      },
      {
        name: "Emotional Intelligence",
        desc: "Managing emotions and understanding emotional responses in others.",
      },
      {
        name: "Leadership Essentials",
        desc: "Core leadership principles for influencing and guiding others.",
      },
      {
        name: "Critical Thinking",
        desc: "Enhancing problem-solving through logical and analytical thinking.",
      },
      {
        name: "Goal Setting & Growth",
        desc: "Establishing personal goals and tracking progress towards self-growth.",
      },
    ],
  },

  {
    name: "The 7-Day Reset: Clarity, Confidence, and Communication",
    description:
      "A short reset program to bring clarity, confidence, and communication improvement in 7 days.",
    modules: [
      {
        name: "Mind Reset Techniques",
        desc: "Strategies to clear mental clutter and refocus on priorities.",
      },
      {
        name: "Daily Confidence Building",
        desc: "Simple exercises to boost self-confidence each day.",
      },
      {
        name: "Effective Communication Practice",
        desc: "Practical sessions to refine your speaking and listening skills.",
      },
      {
        name: "Clarity Exercises",
        desc: "Activities to gain clear understanding of goals and purpose.",
      },
      {
        name: "Emotional Balancing",
        desc: "Maintaining emotional stability under stress or pressure.",
      },
      {
        name: "Confidence Assessment",
        desc: "Evaluate your confidence levels and track improvements.",
      },
      {
        name: "Wrap Up & Progress Evaluation",
        desc: "Review of progress and future action planning.",
      },
    ],
  },

  {
    name: "The 30-Day Foundation: Purpose-Driven Professionalism",
    description:
      "This 30-day course builds strong purpose-driven professional skills.",
    modules: [
      {
        name: "Personal Vision Development",
        desc: "Crafting a clear personal and professional life vision.",
      },
      {
        name: "Building Professional Values",
        desc: "Defining and living by core ethical and professional values.",
      },
      {
        name: "Time Management Skills",
        desc: "Optimizing time for maximum productivity and balance.",
      },
      {
        name: "Decision Making Framework",
        desc: "Structured approach to make sound professional decisions.",
      },
      {
        name: "Communication for Leaders",
        desc: "Advanced communication techniques for leadership roles.",
      },
      {
        name: "Stress Management Techniques",
        desc: "Strategies to cope with and reduce work-related stress.",
      },
      {
        name: "Project Leadership Training",
        desc: "Hands-on training for managing teams and projects effectively.",
      },
    ],
  },

  {
    name: "The 45-Day Career Rewire: Aligning Work with Self",
    description:
      "Align your career to match your personal strengths and passion over 45 days.",
    modules: [
      {
        name: "Career Self-Assessment",
        desc: "Identify your current career status, skills, and areas for improvement.",
      },
      {
        name: "Passion Mapping",
        desc: "Discover activities and career paths that excite you.",
      },
      {
        name: "Strength Analysis",
        desc: "Analyze personal strengths to align with professional roles.",
      },
      {
        name: "Skill Alignment",
        desc: "Map current skills with market demands and future trends.",
      },
      {
        name: "Career Transition Planning",
        desc: "Create a step-by-step plan for career shifts or growth.",
      },
      {
        name: "Interview Preparation",
        desc: "Master interview techniques and present your best self.",
      },
      {
        name: "Long-Term Growth Strategy",
        desc: "Develop a roadmap for sustainable career advancement.",
      },
    ],
  },

  {
    name: "Leadership from Within: 21-Day Intensive",
    description:
      "An intensive 21-day leadership development program from within.",
    modules: [
      {
        name: "Inner Leadership Activation",
        desc: "Awaken your intrinsic leadership potential and confidence.",
      },
      {
        name: "Core Value Identification",
        desc: "Identify and build leadership anchored on personal values.",
      },
      {
        name: "Vision Mapping",
        desc: "Create a powerful leadership vision for long-term impact.",
      },
      {
        name: "Authentic Communication",
        desc: "Lead with honesty and transparency in all interactions.",
      },
      {
        name: "Conflict Resolution",
        desc: "Manage and resolve conflicts constructively.",
      },
      {
        name: "Emotional Control",
        desc: "Stay calm and rational during challenging leadership situations.",
      },
      {
        name: "Mentoring Others",
        desc: "Develop the skills to guide and mentor team members.",
      },
    ],
  },

  {
    name: "The Aaruchudar Educator Program",
    description:
      "Program focused for educators to enhance their teaching & mentoring approach.",
    modules: [
      {
        name: "Modern Teaching Methods",
        desc: "Learn innovative and technology-driven teaching approaches.",
      },
      {
        name: "Student Engagement Strategies",
        desc: "Techniques to keep students engaged and motivated.",
      },
      {
        name: "Mentorship Models",
        desc: "Build effective mentor-mentee relationships with students.",
      },
      {
        name: "Emotional Intelligence in Education",
        desc: "Support students emotionally while maintaining professionalism.",
      },
      {
        name: "Gamified Learning",
        desc: "Implement game elements to make learning interactive and fun.",
      },
      {
        name: "Classroom Management",
        desc: "Establish a productive, respectful, and safe classroom environment.",
      },
      {
        name: "Continuous Learning",
        desc: "Encourage lifelong learning habits for both educators and students.",
      },
    ],
  },

  {
    name: "Institutional Innovation Catalyst",
    description:
      "Program for institutions to innovate and improve educational delivery.",
    modules: [
      {
        name: "Institutional Audit",
        desc: "Assess current systems, strengths, and areas for innovation.",
      },
      {
        name: "Innovation Frameworks",
        desc: "Apply proven frameworks to foster institutional innovation.",
      },
      {
        name: "Leadership Workshops",
        desc: "Train leaders to champion change within the institution.",
      },
      {
        name: "Collaborative Research",
        desc: "Promote research partnerships to drive knowledge sharing.",
      },
      {
        name: "Curriculum Redesign",
        desc: "Develop modern, flexible, and outcome-driven curricula.",
      },
      {
        name: "Faculty Empowerment",
        desc: "Support faculty in adopting innovative teaching methods.",
      },
      {
        name: "Sustainable Development",
        desc: "Align institutional growth with long-term sustainability goals.",
      },
    ],
  },

  {
    name: "Custom Sprint Labs / Retreats",
    description:
      "Customized short sprint labs for organizations or personal retreats.",
    modules: [
      {
        name: "Sprint Planning",
        desc: "Design and schedule focused sprint sessions for teams.",
      },
      {
        name: "Team Collaboration Exercises",
        desc: "Facilitate team-building exercises to improve collaboration.",
      },
      {
        name: "Mind Mapping",
        desc: "Visually organize ideas and action plans during the sprint.",
      },
      {
        name: "Goal Focus Sprints",
        desc: "Short bursts of intense focus to achieve specific goals.",
      },
      {
        name: "Productivity Hacks",
        desc: "Apply techniques to boost productivity during and after sprints.",
      },
      {
        name: "Problem Solving Retreat",
        desc: "Create a safe space to address key organizational challenges.",
      },
      {
        name: "Outcome Reflection",
        desc: "Evaluate sprint outcomes and plan next steps.",
      },
    ],
  },
];

const courseContainer = document.getElementById("courseContainer");
const courseDetail = document.getElementById("courseDetail");
const courseTitle = document.getElementById("courseTitle");
const courseDesc = document.getElementById("courseDesc");
const courseGoal = document.getElementById("courseGoal");
const moduleList = document.getElementById("moduleList");

courses.forEach((course, index) => {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = "images/image1.jpg";
  image.onerror = () => {
    image.src = "https://via.placeholder.com/250x150?text=No+Image";
  };
  card.appendChild(image);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let myCourses = JSON.parse(localStorage.getItem("myLearning")) || [];
  const isEnrolled = myCourses.some((c) => c.name === course.name);
  const enrollButtonText = isEnrolled ? "Enrolled" : "Enroll Course";
  const enrollButtonDisabled = isEnrolled ? "disabled" : "";

  cardBody.innerHTML = `
    <div class="card-title">Course</div>
    <div class="card-text">${course.name}</div>
    <div class="button-group">
      <button class="view-course-btn" onclick="showCourse(${index})">View Course</button>
      <!--<button class="enroll-btn" onclick="enrollCourse(this)" ${enrollButtonDisabled}>${enrollButtonText}</button>-->
    </div>`;

  card.appendChild(cardBody);
  courseContainer.appendChild(card);
});

function showCourse(index) {
  const course = courses[index];
  courseTitle.textContent = course.name;
  courseDesc.textContent = course.description || "";
  courseGoal.textContent = course.goal || "";
  moduleList.innerHTML = "";

  course.modules.forEach((module) => {
    const moduleCard = document.createElement("div");
    moduleCard.className = "module-card";
    moduleCard.innerHTML = `<h3>${module.name}</h3><p>${module.desc}</p>`;
    moduleList.appendChild(moduleCard);
  });

  courseContainer.classList.add("hidden");
  courseDetail.classList.remove("hidden");
}

function backToList() {
  courseDetail.classList.add("hidden");
  courseContainer.classList.remove("hidden");
}

function enrollCourse(button) {
  const card = button.closest(".card");
  const courseName = card.querySelector(".card-text").innerText;
  const courseImage = card.querySelector("img").src;

  let myCourses = JSON.parse(localStorage.getItem("myLearning")) || [];
  const exists = myCourses.some((course) => course.name === courseName);

  if (!exists) {
    const enrolledCourse = {
      name: courseName,
      image: courseImage,
      enrolledOn: new Date().toLocaleString(),
    };
    myCourses.push(enrolledCourse);
    localStorage.setItem("myLearning", JSON.stringify(myCourses));
  }

  button.innerText = "Enrolled";
  button.disabled = true;
}

window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const courseName = urlParams.get("courseName");
  if (courseName) {
    const index = courses.findIndex((course) => course.name === courseName);
    if (index !== -1) {
      showCourse(index);
    }
  }
});
