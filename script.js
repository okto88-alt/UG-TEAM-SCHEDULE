/* ===============================
   DATA ANGGOTA
================================ */
const anggota = {
    pagi: ["Andi", "Bella", "Carlos"],
    malam: ["Dina", "Eko", "Fajar"]
};

/* ===============================
   DATA JADWAL JANUARI
================================ */
const jadwalJanuari = [
    { tanggal: "1 Januari", nama: "Andi", shift: "pagi", web: "Website A" },
    { tanggal: "2 Januari", nama: "Bella", shift: "pagi", web: "Website B" },
    { tanggal: "3 Januari", nama: "Carlos", shift: "pagi", web: "Website C" },
    { tanggal: "4 Januari", nama: "Dina", shift: "malam", web: "Website A" },
    { tanggal: "5 Januari", nama: "Eko", shift: "malam", web: "Website B" },
    { tanggal: "6 Januari", nama: "Fajar", shift: "malam", web: "Website C" }
    // lanjutkan sampai 31 Januari
];

/* ===============================
   TAMPILKAN LIST ANGGOTA
================================ */
function tampilkanAnggota() {
    const pagiList = document.getElementById("shiftPagi");
    const malamList = document.getElementById("shiftMalam");

    anggota.pagi.forEach(nama => {
        const li = document.createElement("li");
        li.textContent = nama;
        pagiList.appendChild(li);
    });

    anggota.malam.forEach(nama => {
        const li = document.createElement("li");
        li.textContent = nama;
        malamList.appendChild(li);
    });
}

/* ===============================
   GENERATE TABEL JADWAL
================================ */
function tampilkanJadwal(data) {
    const tbody = document.getElementById("jadwalBody");
    tbody.innerHTML = "";

    data.forEach(item => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.tanggal}</td>
            <td>${item.nama}</td>
            <td>
                <span class="shift-${item.shift}">
                    ${item.shift.charAt(0).toUpperCase() + item.shift.slice(1)}
                </span>
            </td>
            <td>${item.web}</td>
        `;

        tbody.appendChild(tr);
    });
}

/* ===============================
   FILTER SHIFT
================================ */
function filterShift(shift) {
    if (shift === "all") {
        tampilkanJadwal(jadwalJanuari);
    } else {
        const filtered = jadwalJanuari.filter(item => item.shift === shift);
        tampilkanJadwal(filtered);
    }
}

/* ===============================
   LOAD SAAT HALAMAN DIBUKA
================================ */
document.addEventListener("DOMContentLoaded", () => {
    tampilkanAnggota();
    tampilkanJadwal(jadwalJanuari);
});
