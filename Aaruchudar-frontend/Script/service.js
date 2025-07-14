// services.js

const services = [
  {
    id: 1,
    title: "For Individuals",
    subtitle: "Career Transformation - Beyond Resumes",
    image: "images/our service-1.jpeg",
    detail: "We help individuals break through traditional career paths by redefining their personal brand, confidence, and clarity.",
    des:"Traditional career services focus on resumes and role-fit. We focus on mind-fit.  Aaruchudar’s individual consulting brings proprietary tools such as Clarity Audits, Career Re-architecture Models, and Personal Decision Maps, helping professionals in transition or confusion redefine their trajectory based on who they are- not what the market demands.",
    lis:[
      {
        1:"A 61% increase in career satisfaction within 4–6 months",
        2:" Breakthroughs in decision clarity, self-worth, and adaptability ",
        3:"Stronger positioning in leadership, career shifts, or sabbatical returns "
      }
    ],
  },
  {
    id: 2,
    title: "For Students",
    subtitle: "Real Career Architecture | Beyond Exams and Placements",
    image: "images/our service-2.jpeg",
    detail: "Our programs guide students to unlock their true strengths, build clear career paths, and gain real-world clarity.",
    des:"The average Indian student completes 20+ years of formal education but enters the workforce with fragmented decision-making, unclear self-worth, and superficial placement readiness.",
    lis:[
      {
        1:"Human Intelligence Labs that train emotional clarity, leadership, listening, and decision-making ",
        2:"Placement Preparedness Consulting with real-time thinking, not memorised scripts",
        3:"Customised Career Architecture Tracks for students from year one to final year"
      }
    ]
  },
  
  {
    id: 3,
    title: "For Startups",
    subtitle: "Clarity-First Business Consulting | Idea to Scale with Cognitive Backbone",
    image: "images/our service-3.jpeg",
    detail: "We support startups with tailored strategies, brand soul development, leadership clarity, and scalable execution.",
    des:"Founders often work harder than they think. We help them think harder- with less confusion.We work closely with campus founders, student ventures, and early entrepreneurs to establish decision frameworks, culture systems, and mental stamina- especially when traction is missing or vision is foggy",
    lis:[
      {
        1:"Founder Intelligence Coaching to combat decision fatigue and chaos ",
        2:"A–Z Startup Blueprints for early-stage teams (vision, positioning, pitch, and org design) ",
        3:"Brain-Aligned Business Models to build startups that scale without burnout "
      }
    ]
  },
  {
    id: 4,
    title: "For Corporates",
    subtitle: "Organisational Intelligence | Human-First Performance Strategy ",
    image: "images/our service-4.jpeg",
    detail: "Our consulting focuses on human-centered corporate evolution, leadership clarity, and future-proof decision-making.",
    des:"Many companies face culture decay, leadership fatigue, and passive productivity. Aaruchudar works with human systems inside the enterprise to restore direction, design, and depth. ",
    lis:[
      {
        1:"Conflict & Recovery Labs for teams and mid-senior leadership ",
        2:"Culture Restructuring Sprints using our proprietary Clarity-as-Culture frameworks",
        3:"Executive Intelligence Workshops for decision-making under complexity. Retention-Readiness Labs built on emotional clarity and voice recognition"
      }
    ]
  },
  {
    id: 5,
    title: "For Colleges & Universities",
    subtitle: "Institutional Consulting | From Credit Metrics to Campus Culture",
    image: "images/our service-5.jpeg",
    detail: "We help institutions transform education delivery through purpose-led direction, student clarity, and future planning.",
    des:"Most institutions optimise for compliance. Few invest in cognitive capacity-building. Aaruchudar enables both- bringing Human Intelligence into NAAC/NBA measurable outcomes and long-term student and faculty transformation.",
    lis:[
      {
        1:"Accreditation benefits without external dependencies ",
        2:"Improved student voice, clarity, articulation, and leadership",
        3:"A distinct identity as a Human Intelligence Partner Institute in India"
      }
    ]
  },
  {
    id: 6,
    title: "For Schools",
    subtitle: "Complete School Upgrade | Thinking-Centric Pedagogy for the New Era",
    image: "images/our service-6.jpeg",
    detail: "We work with schools to build soulful education systems with human intelligence and futuristic clarity.",
    des:"Textbooks are no longer enough. School education must now train minds to think, adapt, recover, and relate- far beyond rote curriculum.",
    lis:[
      {
        1:"Student Intelligence Workshops built for middle and senior secondary levels",
        2:"Teacher Reorientation Labs on attention design, emotional clarity, and classroom recovery ",
        3:"Foundational Clarity Programs designed to improve behaviour, empathy, and decision-making from age 12 onward.Institutional consulting that prepares schools for NEP-readiness, mental skill benchmarks, and real-world alignment "
      }
    ]
  },
];

function renderServices() {
  const container = document.querySelector(".services-grid");

  services.forEach((service, index) => {
    const card = document.createElement("div");
    card.className = "service-card";

    card.innerHTML = `
      <img src="${service.image}" alt="${service.title}" />
      <h3>${service.title}</h3>
      <p>${service.subtitle}</p>
      <a href="service.html?id=${service.id}">Explore</a>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderServices);
