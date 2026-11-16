const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const searchInput = document.getElementById("resourceSearch");
const searchButton = document.getElementById("searchButton");
const searchMessage = document.getElementById("searchMessage");
const subjects = ["Botany", "Zoology", "Chemistry", "Microbiology"];

function searchSubject() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    searchMessage.textContent = "Please enter a subject name.";
    return;
  }
  const match = subjects.find(subject => subject.toLowerCase().includes(query));
  searchMessage.textContent = match
    ? `${match} learning area selected. Study materials will be added soon.`
    : "No matching subject found. Try Botany, Zoology, Chemistry or Microbiology.";
}
searchButton.addEventListener("click", searchSubject);
searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") searchSubject();
});

document.querySelectorAll("[data-subject]").forEach(link => {
  link.addEventListener("click", () => {
    searchInput.value = link.dataset.subject;
    searchSubject();
  });
});
