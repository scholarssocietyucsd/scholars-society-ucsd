const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open") ?? false;
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

const pastEventsToggle = document.querySelector(".past-events-toggle");
const pastEventsPanel = pastEventsToggle
  ? document.getElementById(pastEventsToggle.getAttribute("aria-controls") ?? "")
  : null;

if (pastEventsToggle && pastEventsPanel) {
  pastEventsToggle.addEventListener("click", () => {
    const isExpanded = pastEventsToggle.getAttribute("aria-expanded") === "true";
    pastEventsToggle.setAttribute("aria-expanded", String(!isExpanded));
    pastEventsToggle.textContent = isExpanded ? "See Past Events" : "Hide Past Events";
    pastEventsPanel.hidden = isExpanded;
  });
}
