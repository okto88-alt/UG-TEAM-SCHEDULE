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
  const pagiEl = document.getElementById("shiftPagi");
  const malamEl = document.getElementById("shiftMalam");

  pagiEl.innerHTML = "";
  malamEl.innerHTML = "";

  shiftPagi.forEach(name => {
    const div = document.createElement("div");
    div.textContent = name;
    pagiEl.appendChild(div);
  });

  shiftMalam.forEach(name => {
    const div = document.createElement("div");
    div.textContent = name;
    malamEl.appendChild(div);
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
    OFFDAY: ["-", "Heno, Sindy"]
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
    OFFDAY: ["Anggie, Andi", "Valvi"]
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
    OFFDAY: ["-", "Vindy"]
  },
  {
    date: "29-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Heno"],
    VIOBET: ["Anggie", "Vindy"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Valvi"],
    HAHAWIN88: ["Kenny", "Heno, Alfan"],
    OFFDAY: ["-", "Kris, Sindy"]
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
    OFFDAY: ["Chandy", "Heno, Valvi"]
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
    OFFDAY: ["-","-"]
  }
];


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
const tbody = document.getElementById("scheduleBody");

function formatCell(list) {
  if (!list || list.length === 0) return "-";
  return list.join("<br><br>");
}

function renderTable(data) {
  tbody.innerHTML = "";

  data.forEach(day => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${day.date}</td>
      <td>${formatCell(day.SURIA88)}</td>
      <td>${formatCell(day.HAKABET)}</td>
      <td>${formatCell(day.VIOBET)}</td>
      <td>${formatCell(day.TEMPO88)}</td>
      <td>${formatCell(day.FILA88)}</td>
      <td>${formatCell(day.IJOBET)}</td>
      <td>${formatCell(day.HAHAWIN88)}</td>
      <td>${formatCell(day.OFFDAY)}</td>
    `;

    tbody.appendChild(tr);
  });
}

/* ======================================
   SEARCH BY NAME → SUMMARY MODE
====================================== */
const searchInput = document.getElementById("searchInput");
const tbody = document.getElementById("scheduleBody");

function searchByNameSummary(keyword) {
  const q = keyword.toLowerCase().trim();
  tbody.innerHTML = "";

  if (!q) {
    renderTable(scheduleData);
    return;
  }

  const results = [];

  scheduleData.forEach(day => {
    Object.keys(day).forEach(key => {
      if (
        key === "date" ||
        key === "OFFDAY"
      ) return;

      const pagi = day[key][0] || "";
      const malam = day[key][1] || "";

      if (pagi.toLowerCase().includes(q)) {
        results.push({
          date: day.date,
          name: pagi,
          web: key,
          shift: "Pagi"
        });
      }

      if (malam.toLowerCase().includes(q)) {
        results.push({
          date: day.date,
          name: malam,
          web: key,
          shift: "Malam"
        });
      }
    });
  });

  if (results.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align:center; padding:20px;">
          Tidak ada jadwal ditemukan
        </td>
      </tr>
    `;
    return;
  }

  results.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.date}</td>
      <td colspan="2"><strong>${r.name}</strong></td>
      <td colspan="3">${r.web}</td>
      <td colspan="3">${r.shift}</td>
    `;
    tbody.appendChild(tr);
  });
}

/* ======================================
   INPUT LISTENER
====================================== */
searchInput.addEventListener("input", e => {
  searchByNameSummary(e.target.value);
});


/* ======================================
   INIT
====================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderShiftList();
  renderTable(scheduleData);

  document
    .getElementById("searchInput")
    .addEventListener("input", e => searchByName(e.target.value));
});




