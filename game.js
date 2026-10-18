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
      { id: "pot", emoji: "🪴", label: "растение", home: { x: 6, y: 52, w: 14, h: 28 }, start: { x: 70, y: 12 } },
      { id: "book", emoji: "📘", label: "книга", home: { x: 24, y: 68, w: 16, h: 14 }, start: { x: 8, y: 18 } },
      { id: "cup", emoji: "☕", label: "чашка", home: { x: 44, y: 64, w: 12, h: 16 }, start: { x: 82, y: 30 } },
      { id: "shell", emoji: "🐚", label: "ракушка", home: { x: 60, y: 72, w: 10, h: 12 }, start: { x: 36, y: 28 } },
      { id: "candle2", emoji: "🕯️", label: "свеча", home: { x: 74, y: 58, w: 10, h: 18 }, start: { x: 52, y: 14 } },
      { id: "pebble", emoji: "🪨", label: "камень", home: { x: 88, y: 74, w: 8, h: 10 }, start: { x: 22, y: 42 } },
      { id: "leaf", emoji: "🍃", label: "лист", home: { x: 34, y: 52, w: 10, h: 12 }, start: { x: 60, y: 48 } },
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
      { id: "lamp", emoji: "💡", label: "лампа", home: { x: 6, y: 22, w: 14, h: 30 }, start: { x: 74, y: 58 } },
      { id: "notes", emoji: "🗒️", label: "блокнот", home: { x: 26, y: 46, w: 18, h: 22 }, start: { x: 8, y: 62 } },
      { id: "pen", emoji: "✏️", label: "карандаш", home: { x: 48, y: 56, w: 10, h: 20 }, start: { x: 86, y: 14 } },
      { id: "glasses", emoji: "👓", label: "очки", home: { x: 62, y: 40, w: 14, h: 12 }, start: { x: 40, y: 12 } },
      { id: "stone", emoji: "🪨", label: "камень", home: { x: 22, y: 74, w: 10, h: 10 }, start: { x: 58, y: 72 } },
      { id: "mug", emoji: "🍵", label: "кружка", home: { x: 78, y: 58, w: 12, h: 16 }, start: { x: 18, y: 28 } },
      { id: "keys", emoji: "🔑", label: "ключи", home: { x: 48, y: 74, w: 10, h: 10 }, start: { x: 70, y: 28 } },
      { id: "phone", emoji: "📱", label: "телефон", home: { x: 84, y: 30, w: 10, h: 18 }, start: { x: 32, y: 58 } },
    ],
  },
  {
    id: "shelf",
    title: "Полка",
    hint: "Расставь по местам.",
    surface: "#e4e7ef",
    doneTitle: "Полка выровнялась",
    doneText: "Ритм нашёлся.",
    items: [
      { id: "vase", emoji: "🏺", label: "ваза", home: { x: 8, y: 12, w: 12, h: 20 }, start: { x: 76, y: 70 } },
      { id: "frame", emoji: "🖼️", label: "рамка", home: { x: 28, y: 12, w: 16, h: 18 }, start: { x: 10, y: 68 } },
      { id: "candle", emoji: "🕯️", label: "свеча", home: { x: 52, y: 14, w: 10, h: 16 }, start: { x: 44, y: 48 } },
      { id: "bowl", emoji: "🥣", label: "миска", home: { x: 70, y: 16, w: 14, h: 14 }, start: { x: 84, y: 40 } },
      { id: "clock", emoji: "🕰️", label: "часы", home: { x: 10, y: 48, w: 14, h: 16 }, start: { x: 56, y: 70 } },
      { id: "plant", emoji: "🌿", label: "ветка", home: { x: 32, y: 48, w: 12, h: 16 }, start: { x: 6, y: 36 } },
      { id: "book2", emoji: "📗", label: "книга", home: { x: 52, y: 50, w: 14, h: 14 }, start: { x: 68, y: 8 } },
      { id: "box", emoji: "📦", label: "коробка", home: { x: 74, y: 48, w: 14, h: 16 }, start: { x: 28, y: 72 } },
    ],
  },
  {
    id: "kitchen",
    title: "Кухня",
    hint: "Верни на столешницу.",
    surface: "#e9e6e0",
    doneTitle: "Кухня спокойна",
    doneText: "Готово к тишине.",
    items: [
      { id: "knife", emoji: "🔪", label: "нож", home: { x: 8, y: 58, w: 14, h: 12 }, start: { x: 72, y: 18 } },
      { id: "board", emoji: "🪵", label: "доска", home: { x: 28, y: 54, w: 18, h: 18 }, start: { x: 8, y: 20 } },
      { id: "pan", emoji: "🍳", label: "сковорода", home: { x: 52, y: 50, w: 16, h: 18 }, start: { x: 84, y: 62 } },
      { id: "salt", emoji: "🧂", label: "соль", home: { x: 74, y: 58, w: 10, h: 14 }, start: { x: 40, y: 14 } },
      { id: "apple", emoji: "🍎", label: "яблоко", home: { x: 10, y: 30, w: 12, h: 14 }, start: { x: 60, y: 70 } },
      { id: "towel", emoji: "🧻", label: "полотенце", home: { x: 30, y: 28, w: 14, h: 16 }, start: { x: 86, y: 28 } },
      { id: "jar", emoji: "🫙", label: "банка", home: { x: 54, y: 26, w: 12, h: 16 }, start: { x: 18, y: 70 } },
      { id: "spoon", emoji: "🥄", label: "ложка", home: { x: 76, y: 30, w: 10, h: 14 }, start: { x: 48, y: 72 } },
    ],
  },
  {
    id: "entry",
    title: "Прихожая",
    hint: "Всё на свои крючки и полки.",
    surface: "#e6e9ed",
    doneTitle: "Прихожая в порядке",
    doneText: "Можно выдохнуть у двери.",
    items: [
      { id: "coat", emoji: "🧥", label: "пальто", home: { x: 8, y: 18, w: 16, h: 28 }, start: { x: 70, y: 58 } },
      { id: "scarf", emoji: "🧣", label: "шарф", home: { x: 30, y: 22, w: 14, h: 20 }, start: { x: 10, y: 62 } },
      { id: "hat", emoji: "🎩", label: "шляпа", home: { x: 52, y: 18, w: 14, h: 16 }, start: { x: 84, y: 40 } },
      { id: "bag", emoji: "👜", label: "сумка", home: { x: 74, y: 22, w: 14, h: 22 }, start: { x: 40, y: 68 } },
      { id: "shoes", emoji: "👟", label: "кеды", home: { x: 12, y: 64, w: 16, h: 14 }, start: { x: 58, y: 12 } },
      { id: "umbrella", emoji: "☂️", label: "зонт", home: { x: 36, y: 58, w: 12, h: 22 }, start: { x: 86, y: 68 } },
      { id: "mail", emoji: "✉️", label: "письмо", home: { x: 58, y: 66, w: 14, h: 12 }, start: { x: 22, y: 12 } },
      { id: "dog", emoji: "🦮", label: "поводок", home: { x: 80, y: 64, w: 12, h: 14 }, start: { x: 48, y: 42 } },
    ],
  },
  {
    id: "bed",
    title: "Тумбочка",
    hint: "Собери мелочи у кровати.",
    surface: "#ebe7ef",
    doneTitle: "Порядок есть",
    doneText: "Шесть сцен — и тишина.",
    items: [
      { id: "lamp2", emoji: "🪔", label: "лампа", home: { x: 8, y: 20, w: 14, h: 26 }, start: { x: 72, y: 62 } },
      { id: "book3", emoji: "📕", label: "книга", home: { x: 28, y: 48, w: 16, h: 16 }, start: { x: 8, y: 66 } },
      { id: "watch", emoji: "⌚", label: "часы", home: { x: 52, y: 52, w: 12, h: 12 }, start: { x: 84, y: 18 } },
      { id: "water", emoji: "💧", label: "стакан", home: { x: 72, y: 48, w: 12, h: 16 }, start: { x: 40, y: 14 } },
      { id: "cream", emoji: "🧴", label: "крем", home: { x: 10, y: 62, w: 12, h: 16 }, start: { x: 60, y: 28 } },
      { id: "photo", emoji: "🖼️", label: "фото", home: { x: 30, y: 20, w: 16, h: 18 }, start: { x: 86, y: 52 } },
      { id: "earbuds", emoji: "🎧", label: "наушники", home: { x: 54, y: 70, w: 14, h: 12 }, start: { x: 18, y: 36 } },
      { id: "remote", emoji: "📺", label: "пульт", home: { x: 76, y: 70, w: 14, h: 12 }, start: { x: 48, y: 36 } },
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
  candle2: "#f0e8d2",
  pebble: "#d6d4d0",
  leaf: "#d6e5d3",
  lamp: "#efe6c8",
  notes: "#f3ecdc",
  pen: "#dde7d9",
  glasses: "#e2e6ed",
  stone: "#d6d4d0",
  mug: "#e8ddd0",
  keys: "#e8e2c8",
  phone: "#dce3ea",
  vase: "#e4d9cd",
  frame: "#e4dfec",
  candle: "#f0e8d2",
  bowl: "#e6dfd4",
  clock: "#dde5e1",
  plant: "#d6e5d3",
  book2: "#d5e4d6",
  box: "#e6dcc8",
  knife: "#dfe3e6",
  board: "#e2d4c2",
  pan: "#d8d4cf",
  salt: "#ece8e2",
  apple: "#e8d5d2",
  towel: "#e8e4dc",
  jar: "#dde8e2",
  spoon: "#e4e0d8",
  coat: "#d8dde6",
  scarf: "#e8d8d4",
  hat: "#ddd6e4",
  bag: "#e4d9ce",
  shoes: "#d6e0d8",
  umbrella: "#d4dce8",
  mail: "#ebe6dc",
  dog: "#e4ddd4",
  lamp2: "#e6dfe8",
  book3: "#e8d4d4",
  watch: "#dce2e6",
  water: "#d6e4ea",
  cream: "#e8e0ea",
  photo: "#e2dceb",
  earbuds: "#dce6e2",
  remote: "#d8dce4",
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
