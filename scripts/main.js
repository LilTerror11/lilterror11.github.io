document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.getElementById("background").style.animationPlayState = "paused";
  }
});