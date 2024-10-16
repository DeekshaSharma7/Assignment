// Optional: Initialize any custom animation with Anime.js
document.querySelectorAll(".rotate-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    anime({
      targets: card,
      rotate: "1turn",
      duration: 1000,
    });
  });
});
