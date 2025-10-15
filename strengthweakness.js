const analysisForm = document.getElementById("analysisForm");
const resultSection = document.getElementById("resultSection");
const strengthResult = document.getElementById("strengthResult");
const weaknessResult = document.getElementById("weaknessResult");
const careerSuggestions = document.getElementById("careerSuggestions");
const courseSuggestions = document.getElementById("courseSuggestions");

analysisForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const subject = document.getElementById("favSubject").value;
  const activity = document.getElementById("activity").value;
  const personality = document.getElementById("personality").value;

  let strengths = "";
  let weaknesses = "";
  let careers = [];
  let courses = [];

  // Simple logic based on answers
  if (subject === "science") {
    strengths = "Analytical thinking, curiosity, and research ability.";
    weaknesses = "Sometimes overanalyze and struggle with abstract creativity.";
    careers = ["Doctor", "Biotechnologist", "Research Scientist"];
    courses = ["MBBS", "B.Sc Biology", "B.Tech Biotech"];
  } else if (subject === "maths" || activity === "logical") {
    strengths = "Logical reasoning, precision, and problem-solving ability.";
    weaknesses = "May find it hard to work in communication-heavy roles.";
    careers = ["Engineer", "Data Analyst", "Statistician"];
    courses = ["B.Tech", "B.Sc Mathematics", "BCA with Data Science"];
  } else if (subject === "commerce") {
    strengths = "Business mindset, finance management, and strategy.";
    weaknesses = "Less interest in abstract creativity.";
    careers = ["CA", "Economist", "Business Analyst"];
    courses = ["B.Com", "BBA", "Economics (Hons)"];
  } else if (subject === "arts" || activity === "creative") {
    strengths = "Creative thinking, expression, and emotional intelligence.";
    weaknesses = "Dislike for routine or technical work.";
    careers = ["Journalist", "Psychologist", "Designer"];
    courses = ["BA English", "Fine Arts", "Media Studies", "Design"];
  } else if (subject === "technology") {
    strengths = "Tech-savvy, innovative, problem solver.";
    weaknesses = "Might overlook soft skills or teamwork aspects.";
    careers = ["Software Engineer", "Web Developer", "AI Engineer"];
    courses = ["B.Tech CSE", "BCA", "B.Sc IT"];
  }

  // Add extra suggestions based on personality
  if (personality === "leader") careers.push("Manager", "Entrepreneur");
  if (personality === "thinker") careers.push("Researcher", "Analyst");
  if (personality === "creator") careers.push("Content Creator", "UX Designer");
  if (personality === "helper") careers.push("Teacher", "Counselor");

  // Display the result
  strengthResult.innerText = `✅ Strengths: ${strengths}`;
  weaknessResult.innerText = `⚠️ Weaknesses: ${weaknesses}`;
  careerSuggestions.innerHTML = careers.map(c => `<li>${c}</li>`).join("");
  courseSuggestions.innerHTML = courses.map(c => `<li>${c}</li>`).join("");

  resultSection.style.display = "block";
});
