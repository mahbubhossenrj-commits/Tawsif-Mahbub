const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
}

const topicSearch = document.getElementById("topicSearch");
const topicCards = document.querySelectorAll(".topic-card");
const noResults = document.getElementById("noResults");
if (topicSearch) {
  topicSearch.addEventListener("input", () => {
    const query = topicSearch.value.trim().toLowerCase();
    let visibleCount = 0;
    topicCards.forEach(card => {
      const content = (card.innerText + " " + (card.dataset.search || "")).toLowerCase();
      const matches = content.includes(query);
      card.hidden = !matches;
      if (matches) visibleCount++;
    });
    if (noResults) noResults.hidden = visibleCount !== 0;
  });
}
