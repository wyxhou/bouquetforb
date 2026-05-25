(function () {
  const POINTER_SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/></svg>';

  const circles = [140, 180, 220, 260];
  const cursorsPerCircle = [8, 12, 16, 20];

  function buildCursors() {
    const cursors = [];
    circles.forEach((radius, circleIndex) => {
      const count = cursorsPerCircle[circleIndex];
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const rotation = Math.atan2(y, x) * (180 / Math.PI);

        cursors.push({
          x,
          y,
          delay: circleIndex * 0.01 + i * 0.002,
          rotation,
          isTrail: false,
          opacity: 1,
          scale: 1,
        });

        for (let t = 1; t <= 2; t++) {
          cursors.push({
            x,
            y,
            delay: circleIndex * 0.01 + i * 0.002 + t * 0.008,
            rotation,
            isTrail: true,
            opacity: 1 - t * 0.3,
            scale: 1 - t * 0.2,
          });
        }
      }
    });
    return cursors;
  }

  const wrap = document.querySelector(".home-button-wrap");
  const button = document.getElementById("home-button");
  const ring = document.getElementById("cursor-ring");

  if (!wrap || !button || !ring) return;

  const cursors = buildCursors();
  const fragment = document.createDocumentFragment();

  cursors.forEach((cursor, index) => {
    const el = document.createElement("span");
    el.className = "cursor-icon" + (cursor.isTrail ? "" : " is-main");
    el.style.setProperty("--x", cursor.x + "px");
    el.style.setProperty("--y", cursor.y + "px");
    el.style.setProperty("--rotation", cursor.rotation + "deg");
    el.style.setProperty("--cursor-opacity", String(cursor.opacity));
    el.style.setProperty("--cursor-scale", String(cursor.scale));
    el.style.transitionDelay = cursor.delay + "s";
    el.innerHTML = POINTER_SVG;
    el.dataset.index = String(index);
    fragment.appendChild(el);
  });

  ring.appendChild(fragment);

  let navigating = false;

  function setHovered(on) {
    wrap.classList.toggle("is-hovered", on);
    ring.classList.toggle("is-visible", on || wrap.classList.contains("is-active"));
  }

  button.addEventListener("mouseenter", () => setHovered(true));
  button.addEventListener("mouseleave", () => {
    if (!navigating) setHovered(false);
  });

  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (navigating) return;
    navigating = true;
    wrap.classList.add("is-active");
    ring.classList.add("is-visible");
    setTimeout(() => {
      window.location.href = "welcome.html";
    }, 200);
  });
})();
