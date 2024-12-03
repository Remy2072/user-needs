if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

  window.addEventListener("scroll", () => {
      const scrollFraction = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      document.body.style.background = `linear-gradient(${scrollFraction * 360}deg, 
          rgb(255, 126, 179), rgb(117, 197, 252), rgb(255, 204, 128), 
          rgb(178, 102, 255), rgb(102, 255, 178))`;
  });
} else {
  document.body.style.background = "var(--purple)";
}
