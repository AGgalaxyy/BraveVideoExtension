// Only run on search pages
if (!document.getElementById("my-looping-video")) {
  const video = document.createElement("video");
  video.id = "my-looping-video";
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.setAttribute("aria-hidden", "true");
  video.setAttribute("tabindex", "-1");
  video.src = chrome.runtime.getURL("video.mp4");

  Object.assign(video.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    pointerEvents: "none",
    zIndex: "-1"
  });

  (document.body || document.documentElement).prepend(video);

  const bumpContentOnTop = () => {
    try {
      const b = document.body;
      if (!b) return;
      if (getComputedStyle(b).position === "static") b.style.position = "relative";
      if (!b.style.zIndex) b.style.zIndex = "1";
    } catch (e) {}
  };

  bumpContentOnTop();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bumpContentOnTop, { once: true });
  }
}
