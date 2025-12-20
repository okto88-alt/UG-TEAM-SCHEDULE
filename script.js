/* ======================================
   SHIFT STAFF LIST
====================================== */
const shiftPagi = [
  "Chandy", "Kenny", "Anggie", "Andi",
  "Firman", "Nibras", "Angga", "Jerry"
];

const shiftMalam = [
  "Vindy", "Kris", "Heno", "Dea",
  "Alfan", "Valvi", "Kheiren", "Sindy"
];

/* ======================================
   RENDER SHIFT LIST (SIDEBAR)
====================================== */
const shiftPagiEl = document.getElementById("shiftPagi");
const shiftMalamEl = document.getElementById("shiftMalam");

function renderShiftList() {
  shiftPagiEl.innerHTML = "";
  shiftMalamEl.innerHTML = "";

  shiftPagi.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    shiftPagiEl.appendChild(li);
  });

  shiftMalam.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    shiftMalamEl.appendChild(li);
  });
}


/* ======================================
   SCHEDULE DATA
   index 0 = pagi
   index 1 = malam
====================================== */
const scheduleData = [
  {
    date: "21-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Sindy"],
    VIOBET: ["Anggie", "Heno"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Valvi"],
    HAHAWIN88: ["Andi, Anggie", "Heno, Alfan"],
    OFFDAY: ["Chandy", "Vindy"]
  },
  {
    date: "22-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Sindy"],
    VIOBET: ["Anggie", "Heno"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Valvi"],
    HAHAWIN88: ["Andi, Anggie", "Heno, Alfan"],
    OFFDAY: ["Kenny", "Kris"]
  },
  {
    date: "23-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Valvi"],
    VIOBET: ["Anggie", "Vindy"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Kris"],
    HAHAWIN88: ["Kenny", "Valvi, Alfan"],
    OFFDAY: ["Heno", "Sindy"]
  },
  {
    date: "24-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Sindy"],
    VIOBET: ["Anggie", "Heno"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Kenny", "Valvi"],
    IJOBET: ["Jerry", "Kris"],
    HAHAWIN88: ["Andi, Anggie", "Heno, Alfan"],
    OFFDAY: ["Angga", "Kheiren"]
  },
  {
    date: "25-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Kenny", "Sindy"],
    VIOBET: ["Chandy", "Heno"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Kris"],
    HAHAWIN88: ["Kenny, Firman", "Heno, Alfan"],
    OFFDAY: ["Anggie", "Valvi"]
  },
  {
    date: "26-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Sindy"],
    VIOBET: ["Anggie", "Heno"],
    TEMPO88: ["Kenny", "Valvi"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Kris"],
    HAHAWIN88: ["Andi, Anggie", "Heno, Valvi"],
    OFFDAY: ["Firman", "Alfan"]
  },
  {
    date: "27-Dec-2025",
    SURIA88: ["Kenny", "Valvi"],
    HAKABET: ["Andi", "Sindy"],
    VIOBET: ["Anggie", "Heno"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Kris"],
    HAHAWIN88: ["Andi, Anggie", "Heno, Alfan"],
    OFFDAY: ["Nibras", "Dea"]
  },
  {
    date: "28-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Sindy"],
    VIOBET: ["Anggie", "Heno"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Valvi"],
    HAHAWIN88: ["Kenny", "Heno, Alfan"],
    OFFDAY: ["Vindy"]
  },
  {
    date: "29-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Sindy"],
    VIOBET: ["Anggie", "Vindy"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Valvi"],
    HAHAWIN88: ["Kenny", "Heno, Alfan"],
    OFFDAY: ["Kris", "Sindy"]
  },
  {
    date: "30-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Sindy"],
    VIOBET: ["Anggie", "Vindy"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Kris"],
    HAHAWIN88: ["Andi, Anggie", "Alfan, Kheiren"],
    OFFDAY: ["Chandy", "Heno", "Valvi"]
  },
  {
    date: "31-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Sindy"],
    VIOBET: ["Anggie", "Heno"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Kris"],
    HAHAWIN88: ["Kenny", "Valvi"],
    OFFDAY: []
  }
];


/* ======================================
   RENDER TABLE
====================================== */
/*********************************
 * FORMAT TEXT
 *********************************/
function formatShift(list) {
  if (!list || list.length === 0) return "-";
  return list.join("<br><br>");
}

function formatOff(list) {
  if (!list || list.length === 0) return "-";
  return list.join("<br>");
}

/*********************************
 * RENDER TABLE
 *********************************/
function renderTable(data) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  data.forEach(day => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="date-col">${day.date}</td>
      <td>${formatShift(day.SURIA88)}</td>
      <td>${formatShift(day.HAKABET)}</td>
      <td>${formatShift(day.VIOBET)}</td>
      <td>${formatShift(day.TEMPO88)}</td>
      <td>${formatShift(day.FILA88)}</td>
      <td>${formatShift(day.IJOBET)}</td>
      <td>${formatShift(day.HAHAWIN88)}</td>
      <td class="off-day">${formatOff(day.OFF_DAY_UG)}</td>
    `;

    tbody.appendChild(tr);
  });
}

/*********************************
 * SEARCH STAFF (FIXED)
 *********************************/
function searchStaff() {
  const keyword = document
    .getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();

  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {
    const rowText = row.textContent.toLowerCase();
    row.style.display = rowText.includes(keyword) ? "" : "none";
  });
}

/*********************************
 * INIT
 *********************************/
document.addEventListener("DOMContentLoaded", () => {
  renderTable(scheduleData);
});

