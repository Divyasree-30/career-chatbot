const courses = {
  science: [
    {
      name: "B.Sc in Data Science",
      desc: "Focuses on data analytics, statistics, and AI to make data-driven decisions in industries.",
    },
    {
      name: "B.Tech in Artificial Intelligence",
      desc: "Learn machine learning, neural networks, and automation systems.",
    },
    {
      name: "B.Sc in Forensic Science",
      desc: "Study criminal investigation, DNA testing, and evidence analysis.",
    },
    {
      name: "B.Sc in Biotechnology",
      desc: "Combines biology and technology for innovations in healthcare and agriculture.",
    },
    {
      name: "B.Sc in Marine Biology",
      desc: "Explores ocean life and ecosystems for research and conservation.",
    },
    {
      name: "BCA (Bachelor of Computer Applications)",
      desc: "Prepares students for IT, app development, and software jobs.",
    },
    {
      name: "B.Sc in Environmental Science",
      desc: "Study pollution control, climate change, and sustainable solutions.",
    },
  ],

  commerce: [
    {
      name: "B.Com (Bachelor of Commerce)",
      desc: "Foundation for careers in accounting, banking, and business.",
    },
    {
      name: "BBA (Bachelor of Business Administration)",
      desc: "Covers business management, marketing, and entrepreneurship.",
    },
    {
      name: "CA (Chartered Accountancy)",
      desc: "Professional course in finance, auditing, and taxation.",
    },
    {
      name: "CS (Company Secretary)",
      desc: "Focuses on corporate laws, compliance, and business management.",
    },
    {
      name: "BMS (Bachelor of Management Studies)",
      desc: "Business operations, HR, and strategic management specialization.",
    },
    {
      name: "B.Com in E-Commerce",
      desc: "Combines business and technology for online trade and marketing careers.",
    },
    {
      name: "BBA in Digital Marketing",
      desc: "Focuses on online brand building, SEO, and social media strategy.",
    },
  ],

  arts: [
    {
      name: "BA in Psychology",
      desc: "Study human behavior, emotions, and thought processes — ideal for counseling.",
    },
    {
      name: "BA in Journalism & Mass Communication",
      desc: "Prepares students for media, news, advertising, and public relations.",
    },
    {
      name: "BA in Fine Arts",
      desc: "Develop artistic skills in painting, sculpture, and visual design.",
    },
    {
      name: "BA in Sociology",
      desc: "Explore society, culture, and human relationships for social research careers.",
    },
    {
      name: "BA in Fashion Design",
      desc: "Creative course combining art and textile design.",
    },
    {
      name: "BA in Foreign Languages",
      desc: "Learn French, German, Spanish, or Japanese for translation or travel jobs.",
    },
    {
      name: "BA in Tourism & Travel Management",
      desc: "Focuses on hospitality, tour planning, and global travel services.",
    },
  ],
};

// --- DOM Elements ---
const courseList = document.getElementById("courseList");
const searchInput = document.getElementById("searchInput");
const tabButtons = document.querySelectorAll(".tab-btn");

let currentStream = "science";

// --- Display Courses ---
function displayCourses(stream, query = "") {
  const allCourses = courses[stream];
  const filtered = allCourses.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  courseList.innerHTML = "";

  if (filtered.length === 0) {
    courseList.innerHTML = `<p style="text-align:center;">No matching courses found.</p>`;
    return;
  }

  filtered.forEach((course) => {
    const div = document.createElement("div");
    div.classList.add("course-card");
    div.innerHTML = `
      <h3>${course.name}</h3>
      <p>${course.desc}</p>
    `;
    courseList.appendChild(div);
  });
}

// --- Tab Switching ---
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentStream = btn.dataset.stream;
    displayCourses(currentStream, searchInput.value);
  });
});

// --- Search Filtering ---
searchInput.addEventListener("input", () => {
  displayCourses(currentStream, searchInput.value);
});

// --- Initial Load ---
displayCourses(currentStream);
