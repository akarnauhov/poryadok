/**
 * Порядок — перетащи вещи на места.
 */

const scenes = [
  {
    id: "sill",
    title: "Подоконник",
    hint: "Перетащи на пунктир.",
    surface: "#e8efe8",
    doneTitle: "Подоконник готов",
    doneText: "Воздух стал шире.",
    items: [
      { id: "pot", emoji: "🪴", label: "растение", home: { x: 12, y: 58, w: 18, h: 26 }, start: { x: 62, y: 16 } },
      { id: "book", emoji: "📘", label: "книга", home: { x: 38, y: 66, w: 20, h: 16 }, start: { x: 14, y: 22 } },
      { id: "cup", emoji: "☕", label: "чашка", home: { x: 66, y: 62, w: 14, h: 18 }, start: { x: 78, y: 28 } },
      { id: "shell", emoji: "🐚", label: "ракушка", home: { x: 84, y: 70, w: 12, h: 12 }, start: { x: 40, y: 36 } },
    ],
  },
  {
    id: "desk",
    title: "Стол",
    hint: "Один предмет за раз.",
    surface: "#ebe4d8",
    doneTitle: "Стол собран",
    doneText: "Ничего лишнего.",
    items: [
      { id: "lamp", emoji: "💡", label: "лампа", home: { x: 10, y: 30, w: 16, h: 32 }, start: { x: 70, y: 55 } },
      { id: "notes", emoji: "🗒️", label: "блокнот", home: { x: 36, y: 48, w: 22, h: 24 }, start: { x: 12, y: 60 } },
      { id: "pen", emoji: "✏️", label: "карандаш", home: { x: 64, y: 58, w: 12, h: 22 }, start: { x: 84, y: 18 } },
      { id: "glasses", emoji: "👓", label: "очки", home: { x: 78, y: 42, w: 16, h: 14 }, start: { x: 48, y: 16 } },
      { id: "stone", emoji: "🪨", label: "камень", home: { x: 28, y: 72, w: 12, h: 12 }, start: { x: 58, y: 70 } },
    ],
  },
  {
    id: "shelf",
    title: "Полка",
    hint: "Расставь по местам.",
    surface: "#e4e7ef",
    doneTitle: "Порядок есть",
    doneText: "Три сцены — и тишина.",
    items: [
      { id: "vase", emoji: "🏺", label: "ваза", home: { x: 14, y: 16, w: 14, h: 22 }, start: { x: 72, y: 68 } },
      { id: "frame", emoji: "🖼️", label: "рамка", home: { x: 40, y: 16, w: 18, h: 20 }, start: { x: 18, y: 70 } },
      { id: "candle", emoji: "🕯️", label: "свеча", home: { x: 70, y: 18, w: 12, h: 18 }, start: { x: 50, y: 48 } },
      { id: "bowl", emoji: "🥣", label: "миска", home: { x: 18, y: 52, w: 16, h: 16 }, start: { x: 80, y: 24 } },
      { id: "clock", emoji: "🕰️", label: "часы", home: { x: 56, y: 50, w: 16, h: 18 }, start: { x: 34, y: 34 } },
      { id: "plant", emoji: "🌿", label: "ветка", home: { x: 80, y: 52, w: 12, h: 18 }, start: { x: 8, y: 40 } },
    ],
  },
];

const SNAP = 0.28;

const els = {
  start: document.getElementById("start"),
  startBtn: document.getElementById("startBtn"),
  surface: document.getElementById("surface"),
  sceneLabel: document.getElementById("sceneLabel"),
  progressText: document.getElementById("progressText"),
  progressBar: document.getElementById("progressBar"),
  hint: document.getElementById("hint"),
  overlay: document.getElementById("overlay"),
  overlayKicker: document.getElementById("overlayKicker"),
  overlayTitle: document.getElementById("overlayTitle"),
  overlayText: document.getElementById("overlayText"),
  nextBtn: document.getElementById("nextBtn"),
};

let sceneIndex = 0;
let placed = new Set();
let drag = null;

const colors = {
  pot: "#d2dfd0",
  book: "#d2dcea",
  cup: "#ebe2d4",
  shell: "#ebe4de",
  lamp: "#efe6c8",
  notes: "#f3ecdc",
  pen: "#dde7d9",
  glasses: "#e2e6ed",
  stone: "#d6d4d0",
  vase: "#e4d9cd",
  frame: "#e4dfec",
  candle: "#f0e8d2",
  bowl: "#e6dfd4",
  clock: "#dde5e1",
  plant: "#d6e5d3",
};

function pct(n) {
  return `${n}%`;
}

function loadScene(index) {
  const scene = scenes[index];
  placed = new Set();
  els.surface.innerHTML = "";
  els.surface.style.setProperty("--surface", scene.surface);
  els.sceneLabel.textContent = `${scene.title} · ${index + 1}/${scenes.length}`;
  els.hint.textContent = scene.hint;
  updateProgress(scene);

  for (const item of scene.items) {
    const home = document.createElement("div");
    home.className = "home";
    home.dataset.homeFor = item.id;
    home.style.left = pct(item.home.x);
    home.style.top = pct(item.home.y);
    home.style.width = pct(item.home.w);
    home.style.height = pct(item.home.h);
    els.surface.appendChild(home);

    const el = document.createElement("button");
    el.type = "button";
    el.className = "item";
    el.dataset.id = item.id;
    el.setAttribute("aria-label", item.label);
    el.style.left = pct(item.start.x);
    el.style.top = pct(item.start.y);
    el.style.width = pct(item.home.w);
    el.style.height = pct(item.home.h);
    el.style.background = colors[item.id] || "#e8ece9";
    el.textContent = item.emoji;
    el.addEventListener("pointerdown", onPointerDown);
    els.surface.appendChild(el);
  }
}

function updateProgress(scene) {
  els.progressText.textContent = `${placed.size} / ${scene.items.length}`;
  els.progressBar.style.width = `${(placed.size / scene.items.length) * 100}%`;
}

function onPointerDown(e) {
  const el = e.currentTarget;
  if (el.classList.contains("placed")) return;
  e.preventDefault();

  const rect = el.getBoundingClientRect();
  drag = {
    el,
    id: el.dataset.id,
    pointerId: e.pointerId,
    offsetX: e.clientX - rect.left,
    offsetY: e.clientY - rect.top,
    surfaceRect: els.surface.getBoundingClientRect(),
  };

  el.classList.add("dragging");
  try {
    el.setPointerCapture(e.pointerId);
  } catch {
    /* ignore */
  }
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointercancel", onPointerUp);
}

function onPointerMove(e) {
  if (!drag || e.pointerId !== drag.pointerId) return;
  const { el, offsetX, offsetY, surfaceRect } = drag;
  let x = e.clientX - surfaceRect.left - offsetX;
  let y = e.clientY - surfaceRect.top - offsetY;
  x = Math.max(0, Math.min(surfaceRect.width - el.offsetWidth, x));
  y = Math.max(0, Math.min(surfaceRect.height - el.offsetHeight, y));
  el.style.left = `${(x / surfaceRect.width) * 100}%`;
  el.style.top = `${(y / surfaceRect.height) * 100}%`;
  highlightHome(drag.id, el.getBoundingClientRect());
}

function highlightHome(id, itemRect) {
  for (const home of els.surface.querySelectorAll(".home")) {
    home.classList.toggle(
      "hot",
      home.dataset.homeFor === id && overlap(itemRect, home.getBoundingClientRect()) > SNAP
    );
  }
}

function overlap(a, b) {
  const x = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
  const y = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
  const area = a.width * a.height;
  return area ? (x * y) / area : 0;
}

function onPointerUp(e) {
  if (!drag || e.pointerId !== drag.pointerId) return;
  const { el, id, pointerId } = drag;
  try {
    el.releasePointerCapture?.(pointerId);
  } catch {
    /* ignore */
  }
  el.classList.remove("dragging");
  window.removeEventListener("pointermove", onPointerMove);
  window.removeEventListener("pointerup", onPointerUp);
  window.removeEventListener("pointercancel", onPointerUp);

  const home = els.surface.querySelector(`.home[data-home-for="${id}"]`);
  const ratio = home ? overlap(el.getBoundingClientRect(), home.getBoundingClientRect()) : 0;
  for (const h of els.surface.querySelectorAll(".home")) h.classList.remove("hot");
  if (ratio > SNAP) snapToHome(el, home, id);
  drag = null;
}

function snapToHome(el, home, id) {
  el.style.left = home.style.left;
  el.style.top = home.style.top;
  el.classList.add("placed");
  home.classList.add("filled");
  placed.add(id);

  const scene = scenes[sceneIndex];
  updateProgress(scene);
  els.hint.textContent = placed.size === scene.items.length ? "Так лучше." : scene.hint;

  if (placed.size === scene.items.length) {
    setTimeout(() => showComplete(scene), 400);
  }
}

function showComplete(scene) {
  const last = sceneIndex >= scenes.length - 1;
  els.overlay.hidden = false;
  els.overlayKicker.textContent = last ? "готово" : `сцена ${sceneIndex + 1} из ${scenes.length}`;
  els.overlayTitle.textContent = scene.doneTitle;
  els.overlayText.textContent = scene.doneText;
  els.nextBtn.textContent = last ? "Сначала" : "Дальше";
}

els.startBtn.addEventListener("click", () => {
  els.start.hidden = true;
  sceneIndex = 0;
  loadScene(sceneIndex);
});

els.nextBtn.addEventListener("click", () => {
  els.overlay.hidden = true;
  if (sceneIndex < scenes.length - 1) {
    sceneIndex += 1;
    loadScene(sceneIndex);
  } else {
    els.start.hidden = false;
    els.sceneLabel.textContent = "наведи тишину";
    els.hint.textContent = "Перетащи вещи на пунктир. Без спешки.";
    els.progressText.textContent = "0 / 0";
    els.progressBar.style.width = "0%";
    els.surface.innerHTML = "";
  }
});
