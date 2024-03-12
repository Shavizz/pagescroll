const d = document,
  w = window;

const progressBar = d.querySelector(".progress-bar");

const height = d.documentElement.scrollHeight - d.documentElement.clientHeight;

w.addEventListener("scroll", () => {
  const scrollTop = d.documentElement.scrollTop;
  const scrolled = (scrollTop / height) * 100;

  progressBar.style.width = `${scrolled}%`;
});
