/**
 * SAFESPHERE K3 - Interactive Logic & Scientific Data Presentation
 * Based on 3 Attached Scientific Research Journals
 */

// 1. DATASETS & KNOWLEDGE BASES FROM THE 3 JOURNALS

// 7 Indikator K3 Laboratorium Kimia (Jurnal DIII Farmasi Palembang - Lilis Maryanti et al.)
const labIndicatorsData = [
  {
    id: 1,
    title: "Keamanan Umum Laboratorium",
    score: 97.00,
    itemsCount: 7,
    summary: "Evaluasi tata letak laboratorium, kecukupan sirkulasi udara, ketersediaan pintu darurat yang bebas hambatan, serta penataan instrumen penunjang praktikum.",
    sop: [
      "Setiap personel/mahasiswa wajib memahami denah laboratorium dan letak pintu evakuasi darurat.",
      "Lantai laboratorium harus selalu kering, bebas kabel melintang, dan tidak licin.",
      "Jalur evakuasi utama tidak boleh terhalang oleh meja, kursi, atau tabung gas.",
      "Ventilasi udara dan lemari asam (fume hood) harus berfungsi optimal saat praktikum berlangsung."
    ]
  },
  {
    id: 2,
    title: "Pengelolaan & Keamanan Bahan Kimia",
    score: 97.58,
    itemsCount: 5,
    summary: "Penyimpanan bahan kimia sesuai sifat reaktivitasnya, pelabelan wadah secara akurat, penyediaan Lembar Data Keselamatan Bahan (MSDS/LDKB), dan pencegahan kontak bahan reaktif.",
    sop: [
      "Semua botol pereaksi wajib memiliki label nama bahan, konsentrasi, tanggal peracikan, dan simbol bahaya GHS.",
      "Bahan kimia asam pekat dan basa kuat disimpan dalam lemari khusus tahan korosif secara terpisah.",
      "Bahan kimia mudah terbakar (flammable) dijauhkan dari nyala api terbuka atau pemanas elektrik.",
      "Pengambilan bahan kimia pekat atau mudah menguap wajib dilakukan di dalam lemari asam."
    ]
  },
  {
    id: 3,
    title: "Bahan Biologi Berbahaya (Biosafety)",
    score: 95.50,
    itemsCount: 2,
    summary: "Prosedur penanganan spesimen biologi, isolasi kultur mikroorganisme, dan sterilisasi alat sebelum maupun sesudah digunakan.",
    sop: [
      "Penanganan agen biologi wajib mengikuti tingkat keselamatan hayati (Biosafety Level / BSL) yang sesuai.",
      "Autoklaf atau sterilisator wajib digunakan untuk menonaktifkan biakan mikroorganisme sebelum dibuang.",
      "Dilarang menyentuh atau memindahkan biakan mikrobiologi tanpa mengenakan sarung tangan steril."
    ]
  },
  {
    id: 4,
    title: "Kebersihan & Housekeeping Laboratorium",
    score: 95.33,
    itemsCount: 3,
    summary: "Pembersihan meja praktikum secara berkala, penyediaan tempat cuci tangan higienis, dan pemeliharaan alat gelas agar tetap steril dan bebas residu zat berbahaya.",
    sop: [
      "Meja kerja praktikum wajib diseka dengan disinfektan/alkohol 70% sebelum dan sesudah kegiatan.",
      "Alat gelas yang terkontaminasi segera dicuci menggunakan deterjen laboratorium dan dibilas aquadest.",
      "Dilarang keras makan, minum, atau menyimpan makanan/minuman di dalam area laboratorium."
    ]
  },
  {
    id: 5,
    title: "Prosedur Tanggap Keadaan Darurat",
    score: 95.73,
    itemsCount: 15,
    summary: "Kesiapsiagaan instruktur dan mahasiswa menghadapi kebocoran bahan kimia, tumpahan asam, kebakaran, serta ketersediaan eyewash station, safety shower, dan APAR.",
    sop: [
      "Tersedia unit cuci mata (eye washer) dan pancuran darurat (safety shower) yang siap digunakan tanpa hambatan.",
      "Apabila bahan kimia mengenai mata, bilas segera dengan air mengalir minimal selama 15 menit terus-menerus.",
      "APAR (Alat Pemadam Api Ringan) jenis dry chemical / CO2 harus terpasang di lokasi yang mudah dijangkau dan bertanda jelas.",
      "Jika terjadi alarm evakuasi, tinggalkan ruangan dengan tertib melalui rute jalur evakuasi menuju titik kumpul (assembly point)."
    ]
  },
  {
    id: 6,
    title: "Alat Pelindung Diri (APD)",
    score: 97.63,
    itemsCount: 8,
    summary: "Kewajiban penggunaan jas laboratorium katun berlengan panjang, kacamata goggle kimia, sarung tangan nitril/lateks, masker respiratori, dan sepatu tertutup.",
    sop: [
      "Jas laboratorium katun berkancing rapat wajib dikenakan sejak sebelum melangkah masuk ruang praktikum.",
      "Kacamata pelindung (safety goggles) wajib dipakai saat mereaksikan zat kimia atau memanaskan tabung reaksi.",
      "Sarung tangan (nitril/lateks) wajib disesuaikan dengan jenis zat kimia yang digunakan dan diganti jika robek.",
      "Wajib mengenakan sepatu tertutup yang melindungi seluruh punggung kaki (bukan sandal atau sepatu berbahan kain tipis)."
    ]
  },
  {
    id: 7,
    title: "Pengelolaan Limbah Berbahaya & B3",
    score: 97.94,
    itemsCount: 3,
    summary: "Pemisahan limbah sisa praktikum berdasarkan karakteristik cair organik, anorganik, asam/basa pekat, serta penanganan limbah jarum/benda tajam (sharp container).",
    sop: [
      "Limbah pelarut organik (seperti kloroform, aseton, etanol) tidak boleh dibuang langsung ke saluran wastafel umum.",
      "Tersedia jeriken limbah B3 khusus bertutup rapat dengan label jenis limbah kimia yang jelas.",
      "Pecahan kaca dan jarum suntik/spuit bekas harus dibuang ke dalam wadah tahan tusukan (sharp disposal box).",
      "Penetralan limbah asam atau basa harus dilakukan sebelum tahap pengolahan akhir oleh pihak ketiga berizin."
    ]
  }
];

// Simbol Bahaya GHS & Rambu K3
const k3SignsData = [
  {
    id: "flammable",
    category: "kimia",
    title: "Mudah Terbakar (Flammable)",
    badge: "GHS 02",
    type: "ghs",
    desc: "Zat cair, padat, atau gas yang mudah tersulut api pada suhu ruang atau percikan listrik.",
    examples: "Etanol, Aseton, Dietil Eter, Gas LPG, Metanol.",
    handling: "Jauhkan dari sumber api terbuka, pemanas, dan percikan elektrostatik. Simpan di safety cabinet berventilasi."
  },
  {
    id: "toxic",
    category: "kimia",
    title: "Beracun Akut (Toxic / Fatal)",
    badge: "GHS 06",
    type: "ghs",
    desc: "Zat yang dalam konsentrasi sangat kecil dapat menimbulkan keracunan berat hingga kematian bila terhirup, tertelan, atau terserap kulit.",
    examples: "Kalium Sianida (KCN), Merkuri (Hg), Natrium Azida, Kloroform pekat.",
    handling: "Wajib ditangani di lemari asam dengan sarung tangan tebal dan respirator. Sediakan antidot khusus di lab."
  },
  {
    id: "corrosive",
    category: "kimia",
    title: "Korosif (Corrosive)",
    badge: "GHS 05",
    type: "ghs",
    desc: "Zat yang dapat merusak jaringan hidup seperti kulit dan mata seketika serta melarutkan logam/wadah penyimpanan.",
    examples: "Asam Sulfat (H2SO4), Asam Klorida (HCl), Natrium Hidroksida (NaOH), Asam Nitrat.",
    handling: "Gunakan safety goggle dan sarung tangan nitril tahan asam. Jika terkena kulit, bilas air mengalir 15 menit."
  },
  {
    id: "explosive",
    category: "kimia",
    title: "Mudah Meledak (Explosive)",
    badge: "GHS 01",
    type: "ghs",
    desc: "Zat tidak stabil yang dapat melepaskan energi detonasi hebat akibat guncangan, gesekan, atau panas mendadak.",
    examples: "Asam Pikrat kering, Peroksida organik, Amonium Nitrat pekat.",
    handling: "Hindari benturan mekanis, gesekan, dan kenaikan suhu. Simpan dalam kondisi stabil dan terpantau kelembapannya."
  },
  {
    id: "biohazard",
    category: "biologi",
    title: "Bahaya Hayati (Biohazard)",
    badge: "Biosafety",
    type: "ghs",
    desc: "Mikroorganisme patogen (virus, bakteri menular, spora toksik) atau limbah klinis yang dapat memicu infeksi penyakit.",
    examples: "Kultur Bacillus, virus influenza, darah/serum pasien, jarum bekas tes patologi.",
    handling: "Bekerja di dalam Biosafety Cabinet (BSC), dekontaminasi permukaan dengan disinfektan, dan autoklaf limbah."
  },
  {
    id: "ppe_glasses",
    category: "wajib",
    title: "Wajib Pelindung Mata (Goggles)",
    badge: "Mandatory",
    type: "mandatory",
    desc: "Kewajiban mengenakan pelindung mata untuk mencegah percikan cairan korosif, partikel debu tajam, atau radiasi sinar UV.",
    examples: "Digunakan di lab kimia analitik, destruksi asam, dan pemotongan mekanik.",
    handling: "Pastikan kacamata memiliki pelindung samping (side-shield) dan menempel rapat tanpa celah longgar."
  },
  {
    id: "ppe_gloves",
    category: "wajib",
    title: "Wajib Sarung Tangan Pelindung",
    badge: "Mandatory",
    type: "mandatory",
    desc: "Mencegah paparan langsung zat iritan, karsinogenik, panas ekstrem, atau infeksi mikrobiologis pada kulit tangan.",
    examples: "Sarung tangan Nitril untuk pelarut kimia, Lateks untuk mikroba, Sarung Tangan Cryo untuk nitrogen cair.",
    handling: "Lepaskan sarung tangan dengan teknik 'inside-out' agar tangan tidak menyentuh bagian luar yang terkontaminasi."
  },
  {
    id: "emergency_eyewash",
    category: "darurat",
    title: "Pancuran & Pencuci Mata Darurat",
    badge: "Emergency",
    type: "emergency",
    desc: "Peralatan pertolongan pertama ketika terjadi kontaminasi zat kimia berbahaya ke mata atau seluruh tubuh.",
    examples: "Tersedia di setiap lorong lab kimia utama dan dapat diaktifkan hanya dengan sekali dorong tuas.",
    handling: "Periksa tekanan air setiap minggu. Tarik tuas, buka kelopak mata dengan jari, dan bilas minimal 15 menit."
  },
  {
    id: "evacuation_exit",
    category: "darurat",
    title: "Pintu & Jalur Evakuasi Darurat",
    badge: "Emergency",
    type: "emergency",
    desc: "Rute penyelamatan diri tercepat menuju ruang terbuka aman di luar gedung ketika terjadi bencana atau kebakaran.",
    examples: "Pintu darurat berpegangan dorong (panic bar) bercahaya fosfor (glow in the dark).",
    handling: "Dilarang mengunci pintu darurat selama jam kegiatan dan dilarang menumpuk barang di koridor."
  }
];

// Jurnal Referensi Ilmiah
const scientificJournalsData = [
  {
    id: "jurnal1",
    title: "Editorial: Urgensi Keselamatan Kesehatan Kerja dan Lingkungan (K3L)",
    author: "Aulia Rahman, SKM",
    institution: "Departemen Kesehatan Lingkungan dan Kerja, Fakultas Kesehatan Masyarakat, Universitas Andalas",
    journalName: "Jurnal Keselamatan, Kesehatan Kerja dan Lingkungan (JK3L)",
    volume: "Vol. 01 No. 01, Tahun 2020",
    url: "http://jk3l.fkm.unand.ac.id/",
    summary: "Mengkaji esensi K3L yang tidak terpisahkan dalam pembangunan nasional. Mengabaikan K3L berdampak pada kerugian fatal seperti kecelakaan kerja (luka gores hingga patah tulang dan kematian), gangguan kesehatan (gangguan pendengaran/tuli, serangan jantung, stroke), hingga kerusakan ekologis yang mengancam masyarakat luas. Menyoroti pentingnya kepatuhan regulasi pemerintah.",
    keyTakeaway: "K3L adalah hak asasi pekerja dan fondasi keberlanjutan peradaban. Regulasi telah lengkap, namun komitmen implementasi di lapangan masih menjadi tantangan utama."
  },
  {
    id: "jurnal2",
    title: "Identifikasi Penerapan Prosedur K3 di Laboratorium Kimia pada Prodi DIII Farmasi di Kota Palembang",
    author: "Lilis Maryanti, Yuliani, Metha Vionari",
    institution: "Jurusan Farmasi, Poltekkes Kemenkes Palembang",
    journalName: "Gorontalo Journal Health and Science Community (Gojhes)",
    volume: "Vol. 9 No. 1, 2025 / Accepted Dec 2024 (P-ISSN: 2614-8676)",
    url: "https://ejurnal.ung.ac.id/index.php/gojhes/index",
    summary: "Penelitian kuantitatif deskriptif terhadap 100 responden mahasiswa farmasi di laboratorium kimia dengan 43 butir instrumen checklist. Mengungkapkan latar belakang insiden nyata (ledakan lab kampus di China 2018 menewaskan 3 mahasiswa, ledakan toples pemurnian FFUI Depok 2015 melukai 14 orang, kebakaran lab kimia Undip 2020). Mengukur 7 indikator dengan hasil rata-rata kepatuhan sangat tinggi yaitu 96.74% (p=0.000, Ho ditolak).",
    keyTakeaway: "Penerapan SOP laboratorium, ketersediaan APD lengkap, dan penanganan limbah B3 terbukti secara statistik (p < 0.05) efektif meminimalkan risiko kecelakaan kerja mahasiswa."
  },
  {
    id: "jurnal3",
    title: "Pengenalan Budaya Keselamatan dan Kesehatan Kerja di Laboratorium SMA melalui Edukasi",
    author: "Nurwadia Sri Putri Rahmadani, Andi Yepita Deviyanti, Cici Chairunisa Mas'um, Hardianty, Siti Nurmanis Sari",
    institution: "Program Studi S1 Keselamatan dan Kesehatan Kerja, Institut Batari Toja Bone",
    journalName: "Compromise Journal: Community Professional Service Journal",
    volume: "Vol. 3 No. 3, Agustus 2025 (e-ISSN: 3026-5789)",
    url: "https://jurnal.stikeskesosi.ac.id/index.php/CompromiseJournal",
    summary: "Program Pengabdian kepada Masyarakat (PKM) di SMAN 3 Bone bagi siswa kelas XII.F.3. Menyoroti bahwa anggapan bahaya laboratorium sekolah kecil merupakan pemahaman keliru. Mengulas 5 faktor potensi bahaya menurut Dr. Suma'mur (fisik, kimia, biologi, ergonomi, psikologi), demonstrasi penggunaan APD lengkap, pengenalan APAR, kotak P3K, serta evaluasi peningkatan wawasan K3 siswa.",
    keyTakeaway: "Edukasi K3 sejak dini di tingkat sekolah menengah berhasil membangun budaya sadar bahaya, ketaatan SOP, dan kecakapan tanggap darurat."
  }
];

// Soal Kuis K3 Interaktif
const quizQuestions = [
  {
    question: "Menurut klasifikasi Dr. Suma'mur yang dibahas dalam jurnal K3, manakah yang termasuk dalam kategori 'Bahaya Fisik' di laboratorium?",
    options: [
      "Paparan uap asam sulfat dan pelarut kloroform",
      "Sengatan listrik, kebisingan, penerangan kurang, dan tekanan panas",
      "Bakteri patogen, virus, dan limbah biakan jamur",
      "Stres beban tugas praktikum dan kecemasan ujian"
    ],
    answer: 1,
    explanation: "Bahaya fisik mencakup faktor-faktor mekanis dan energi seperti radiasi, kebisingan, sengatan arus listrik, getaran, penerangan buruk, dan suhu ekstrem."
  },
  {
    question: "Berdasarkan hasil riset pada Jurnal Gojhes (Palembang), berapa rata-rata tingkat kepatuhan mahasiswa farmasi terhadap 7 indikator K3 laboratorium?",
    options: [
      "78.40%",
      "85.20%",
      "96.74%",
      "99.90%"
    ],
    answer: 2,
    explanation: "Hasil penelitian kuantitatif pada 100 responden mahasiswa DIII Farmasi di Palembang menunjukkan rata-rata kepatuhan sebesar 96.74% dengan nilai signifikansi p=0.000 (sangat baik)."
  },
  {
    question: "Jika mata seorang praktikan secara tidak sengaja terpercik larutan asam klorida (HCl), langkah pertama yang WAJIB segera dilakukan adalah:",
    options: [
      "Menggosok mata dengan lap kain atau tisu bersih",
      "Segera membilas mata di eyewash station dengan air mengalir selama minimal 15 menit",
      "Meneteskan obat tetes mata yang tersedia di kotak P3K",
      "Menunggu praktikum selesai lalu pergi ke klinik terdekat"
    ],
    answer: 1,
    explanation: "Prosedur baku pertolongan pertama percikan zat korosif ke mata adalah segera membilas di pancuran cuci mata (eyewash station) dengan kelopak mata dibuka lebar selama minimal 15 menit untuk mengencerkan zat kimia secara masif."
  },
  {
    question: "Manakah tindakan penanganan limbah pelarut kimia organik (seperti aseton dan etanol) yang paling tepat di laboratorium?",
    options: [
      "Dibuang langsung ke saluran wastafel dengan dialirkan air kran yang banyak",
      "Dicampur bersama cairan asam kuat pekat agar langsung terlarut",
      "Dikumpulkan ke dalam jeriken khusus limbah cair organik bertutup rapat untuk diolah pihak ketiga berizin",
      "Dibiarkan menguap begitu saja di atas meja terbuka"
    ],
    answer: 2,
    explanation: "Pelarut organik tidak boleh dibuang ke saluran air umum karena dapat mencemari air tanah, merusak pipa, dan menimbulkan uap mudah terbakar. Limbah wajib dipisah ke wadah jeriken B3 khusus."
  },
  {
    question: "Simbol bahaya GHS berupa belah ketupat berbingkai merah dengan gambar api di atas bidang putih menandakan karakteristik bahan kimia:",
    options: [
      "Mudah Meledak (Explosive)",
      "Mudah Terbakar (Flammable)",
      "Beracun Bagi Lingkungan (Environmental Toxicity)",
      "Gas Bertekanan Tinggi (Gas Under Pressure)"
    ],
    answer: 1,
    explanation: "Simbol nyala api berbingkai merah (GHS 02) melambangkan bahan 'Flammable' (mudah terbakar) yang dapat menyala bila bersentuhan dengan udara, panas, atau percikan bunga api."
  }
];

// 2. DOM INITIALIZATION & EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initPageRouter();
  renderLabIndicators();
  renderSigns("all");
  renderJournals();
  initHazardTabs();
  initAuditChecklist();
  initQuiz();
  renderComparisonBars();
});

// Theme Management (Dark / Light)
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  
  const savedTheme = localStorage.getItem("safesphere_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("safesphere_theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById("themeIcon");
  if (!themeIcon) return;
  if (theme === "light") {
    // Sun icon
    themeIcon.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  } else {
    // Moon icon
    themeIcon.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }
}

// Page Router & Dynamic Page Switching (SPA)
function initPageRouter() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");

  // Mobile menu toggle
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
  }

  function switchPage(pageId) {
    const rawId = (pageId || "beranda").replace("#", "").trim();
    let target = rawId || "beranda";
    let targetEl = document.getElementById(target);

    // If target doesn't exist or is not a page-view, fallback to beranda
    if (!targetEl || !targetEl.classList.contains("page-view")) {
      target = "beranda";
      targetEl = document.getElementById("beranda");
    }

    // Toggle active state for all page views
    const pageViews = document.querySelectorAll(".page-view");
    pageViews.forEach(page => {
      page.classList.remove("active");
    });

    if (targetEl) {
      targetEl.classList.add("active");
    }

    // Update active state on nav links
    const navLinks = document.querySelectorAll(".nav-link");
    const dropdownItems = document.querySelectorAll(".nav-dropdown-item");

    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === `#${target}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    let isDropdownActive = false;
    dropdownItems.forEach(item => {
      const href = item.getAttribute("href");
      if (href === `#${target}`) {
        item.classList.add("active");
        isDropdownActive = true;
      } else {
        item.classList.remove("active");
      }
    });

    const dropdownBtn = document.querySelector(".nav-dropdown-btn");
    if (dropdownBtn) {
      if (isDropdownActive) {
        dropdownBtn.classList.add("active");
      } else {
        dropdownBtn.classList.remove("active");
      }
    }

    // Close mobile nav drawer if open
    if (mobileNav) {
      mobileNav.classList.remove("open");
    }

    // Scroll to top of the page smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Handle browser Back / Forward buttons
  window.addEventListener("hashchange", () => {
    switchPage(window.location.hash);
  });

  // Global click interception for hash links pointing to pages
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a[href^='#']");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    const pageId = href.substring(1);
    const targetPage = document.getElementById(pageId);

    if (targetPage && targetPage.classList.contains("page-view")) {
      e.preventDefault();
      if (window.location.hash === href) {
        switchPage(pageId);
      } else {
        window.location.hash = href;
      }
    }
  });

  // Initial load: respect hash or open beranda
  const initialHash = window.location.hash ? window.location.hash.substring(1) : "beranda";
  switchPage(initialHash);
}

// Render 7 Indikator K3 Laboratorium
function renderLabIndicators() {
  const container = document.getElementById("indicatorsGrid");
  const barChartContainer = document.getElementById("interactiveBarChart");
  if (!container) return;

  container.innerHTML = "";
  if (barChartContainer) barChartContainer.innerHTML = "";

  labIndicatorsData.forEach((item) => {
    // 1. Render Card
    const card = document.createElement("div");
    card.className = "indicator-card";
    card.innerHTML = `
      <div>
        <div class="ind-top">
          <span class="ind-num">Indikator 0${item.id}</span>
          <div class="ind-score">${item.score}% <small>Kepatuhan</small></div>
        </div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="progress-track">
          <div class="progress-bar" style="width: ${item.score}%;"></div>
        </div>
      </div>
      <a href="javascript:void(0)" class="card-action-link" onclick="openIndicatorModal(${item.id})">
        <span>Lihat Prosedur Standar & SOP</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    `;
    container.appendChild(card);

    // 2. Render Interactive Bar Chart in Graphics Section
    if (barChartContainer) {
      const barRow = document.createElement("div");
      barRow.className = "bar-row";
      barRow.innerHTML = `
        <div class="bar-row-meta">
          <span class="bar-row-label">${item.id}. ${item.title}</span>
          <span class="bar-row-val">${item.score}%</span>
        </div>
        <div class="bar-row-track">
          <div class="bar-row-fill" style="width: ${item.score}%;"></div>
        </div>
      `;
      barChartContainer.appendChild(barRow);
    }
  });
}

// Open Modal for Indicator
window.openIndicatorModal = function(id) {
  const item = labIndicatorsData.find(i => i.id === id);
  if (!item) return;

  const modalBackdrop = document.getElementById("globalModal");
  const modalContent = document.getElementById("modalContent");
  if (!modalBackdrop || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-header">
      <span class="badge badge-emerald">Indikator ${item.id} / 7</span>
      <h2 style="font-size: 1.5rem; margin-top: 0.5rem; margin-bottom: 0.25rem;">${item.title}</h2>
      <p style="color: var(--brand-emerald-light); font-weight: 700;">Tingkat Kepatuhan Mahasiswa: ${item.score}%</p>
    </div>
    <div class="modal-body">
      <p>${item.summary}</p>
      <h4>Standard Operating Procedure (SOP) & Checklist:</h4>
      <ul>
        ${item.sop.map(s => `<li>${s}</li>`).join('')}
      </ul>
      <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-sm); border: var(--glass-border); margin-top: 1.5rem; font-size: 0.825rem;">
        <strong>Sumber Validasi:</strong> Jurnal Gojhes Poltekkes Palembang (2025). Menggunakan kuesioner teruji validitas & reliabilitas dengan uji signifikansi SPSS t-test (p=0.000).
      </div>
    </div>
  `;

  modalBackdrop.classList.add("open");
};

// Hazard Classification Tabs (Suma'mur)
function initHazardTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const panes = document.querySelectorAll(".hazard-content-pane");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      tabBtns.forEach(b => b.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const activePane = document.getElementById(`pane-${targetTab}`);
      if (activePane) activePane.classList.add("active");
    });
  });
}

// Render Simbol Bahaya K3
function renderSigns(categoryFilter = "all") {
  const container = document.getElementById("signsGrid");
  const filterBtns = document.querySelectorAll(".sign-filter-btn");
  if (!container) return;

  container.innerHTML = "";

  const filtered = categoryFilter === "all" 
    ? k3SignsData 
    : k3SignsData.filter(s => s.category === categoryFilter);

  filtered.forEach(sign => {
    const card = document.createElement("div");
    card.className = "sign-card";
    card.onclick = () => openSignModal(sign.id);

    let symbolHTML = "";
    if (sign.type === "ghs") {
      symbolHTML = `
        <div class="sign-symbol-wrap">
          <div class="ghs-diamond">
            ${getSignIconSVG(sign.id)}
          </div>
        </div>
      `;
    } else if (sign.type === "mandatory") {
      symbolHTML = `
        <div class="sign-symbol-wrap">
          <div class="mandatory-circle">
            ${getSignIconSVG(sign.id)}
          </div>
        </div>
      `;
    } else {
      symbolHTML = `
        <div class="sign-symbol-wrap">
          <div class="emergency-square">
            ${getSignIconSVG(sign.id)}
          </div>
        </div>
      `;
    }

    card.innerHTML = `
      ${symbolHTML}
      <h4>${sign.title}</h4>
      <p>${sign.desc.substring(0, 75)}...</p>
      <span class="sign-tag">${sign.badge}</span>
    `;
    container.appendChild(card);
  });

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSigns(btn.getAttribute("data-filter"));
    };
  });
}

function getSignIconSVG(id) {
  switch (id) {
    case "flammable":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`;
    case "toxic":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M8 20v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2"></path><path d="M12 4a7 7 0 0 0-7 7v2a7 7 0 0 0 14 0v-2a7 7 0 0 0-7-7z"></path><line x1="10" y1="20" x2="10" y2="22"></line><line x1="14" y1="20" x2="14" y2="22"></line></svg>`;
    case "corrosive":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4l-4 4 2 2-2 2 4 4"></path><path d="M4 14l3-3 2 2"></path><rect x="2" y="19" width="20" height="3" rx="1"></rect></svg>`;
    case "explosive":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><circle cx="12" cy="12" r="3"></circle></svg>`;
    case "biohazard":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"></circle><path d="M12 4a5 5 0 0 1 5 5c0 1.5-.6 2.8-1.5 3.8"></path><path d="M7 9a5 5 0 0 1 5-5"></path><path d="M6 18a5 5 0 0 1 1-5.7"></path><path d="M18 18a5 5 0 0 0-1-5.7"></path></svg>`;
    case "ppe_glasses":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="12" r="4"></circle><circle cx="18" cy="12" r="4"></circle><line x1="10" y1="12" x2="14" y2="12"></line><path d="M2 12c0-3 2-6 6-6"></path><path d="M22 12c0-3-2-6-6-6"></path></svg>`;
    case "ppe_gloves":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3"></path><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v7"></path><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.8-6-3l-2.4-3.6a2 2 0 0 1 2.8-2.8L8 13"></path></svg>`;
    case "emergency_eyewash":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path></svg>`;
    case "evacuation_exit":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`;
    default:
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
  }
}

window.openSignModal = function(id) {
  const sign = k3SignsData.find(s => s.id === id);
  if (!sign) return;

  const modalBackdrop = document.getElementById("globalModal");
  const modalContent = document.getElementById("modalContent");
  if (!modalBackdrop || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-header">
      <span class="badge badge-cyan">${sign.badge}</span>
      <h2 style="font-size: 1.5rem; margin-top: 0.5rem; margin-bottom: 0.25rem;">${sign.title}</h2>
      <p style="color: var(--text-muted); font-size: 0.85rem;">Kategori: ${sign.category.toUpperCase()}</p>
    </div>
    <div class="modal-body">
      <p>${sign.desc}</p>
      <h4>Contoh Zat / Area Terkait:</h4>
      <p><code>${sign.examples}</code></p>
      <h4>Prosedur Keselamatan & Penanganan:</h4>
      <p>${sign.handling}</p>
    </div>
  `;

  modalBackdrop.classList.add("open");
};

// Render Scientific Journals
function renderJournals() {
  const container = document.getElementById("journalsGrid");
  if (!container) return;

  container.innerHTML = "";
  scientificJournalsData.forEach(journal => {
    const card = document.createElement("div");
    card.className = "journal-card";
    card.innerHTML = `
      <div>
        <div class="journal-top">
          <div class="journal-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <span class="journal-volume">${journal.volume}</span>
        </div>
        <h3 class="journal-title">${journal.title}</h3>
        <p class="journal-authors">${journal.author}</p>
        <p class="journal-affiliation">${journal.institution}</p>
        <p class="journal-abstract">${journal.summary.substring(0, 160)}...</p>
      </div>
      <div>
        <div class="journal-card-actions">
          <button class="btn btn-primary btn-sm" onclick="openJournalModal('${journal.id}')">
            <span>Baca Ringkasan Eksekutif</span>
          </button>
          <a href="${journal.url}" target="_blank" class="btn btn-outline btn-sm" style="padding: 0.4rem 0.75rem;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

window.openJournalModal = function(id) {
  const journal = scientificJournalsData.find(j => j.id === id);
  if (!journal) return;

  const modalBackdrop = document.getElementById("globalModal");
  const modalContent = document.getElementById("modalContent");
  if (!modalBackdrop || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-header">
      <span class="badge badge-emerald">${journal.journalName}</span>
      <h2 style="font-size: 1.4rem; margin-top: 0.5rem; margin-bottom: 0.35rem;">${journal.title}</h2>
      <p style="color: var(--brand-emerald-light); font-weight: 600; font-size: 0.9rem;">${journal.author} — ${journal.institution}</p>
      <p style="font-size: 0.8rem; color: var(--text-muted);">${journal.volume}</p>
    </div>
    <div class="modal-body">
      <h4>Abstrak & Latar Belakang:</h4>
      <p>${journal.summary}</p>
      <h4>Temuan Kunci (Key Takeaways):</h4>
      <div style="background: var(--bg-card); border-left: 3px solid var(--brand-emerald); padding: 1rem; border-radius: 4px; margin: 1rem 0;">
        ${journal.keyTakeaway}
      </div>
      <h4>Tautan Sumber Asli Jurnal:</h4>
      <p><a href="${journal.url}" target="_blank" style="color: var(--brand-emerald-light); text-decoration: underline;">Kunjungi Repositori Jurnal Terbitan (${journal.url})</a></p>
    </div>
  `;

  modalBackdrop.classList.add("open");
};

// Comparison Bars for Pre-Test vs Post-Test (SMAN 3 Bone Study)
function renderComparisonBars() {
  const container = document.getElementById("compBarsGrid");
  if (!container) return;

  const compData = [
    { label: "Pengenalan APD", pre: 42, post: 98 },
    { label: "Rambu & Simbol Bahaya", pre: 34, post: 94 },
    { label: "Prosedur SOP Darurat", pre: 28, post: 91 },
    { label: "Pencegahan PAK & Insiden", pre: 38, post: 95 }
  ];

  container.innerHTML = "";
  compData.forEach(item => {
    const col = document.createElement("div");
    col.className = "comp-item";
    col.innerHTML = `
      <div class="comp-dual-track">
        <div class="comp-bar comp-bar-pre" style="height: ${item.pre * 1.4}px;">
          <span class="comp-bar-val">${item.pre}%</span>
        </div>
        <div class="comp-bar comp-bar-post" style="height: ${item.post * 1.4}px;">
          <span class="comp-bar-val">${item.post}%</span>
        </div>
      </div>
      <div class="comp-label">${item.label}</div>
    `;
    container.appendChild(col);
  });
}

// Interactive Audit Checklist (Kalkulator Kesiapsiagaan Lab)
function initAuditChecklist() {
  const checkboxes = document.querySelectorAll(".audit-check");
  const scoreNum = document.getElementById("auditScoreNum");
  const scoreBadge = document.getElementById("auditScoreBadge");
  const scoreNote = document.getElementById("auditScoreNote");

  function calculateAudit() {
    let checkedCount = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });

    const percent = Math.round((checkedCount / checkboxes.length) * 100);
    if (scoreNum) scoreNum.innerText = `${percent}%`;

    if (scoreBadge && scoreNote) {
      if (percent >= 90) {
        scoreBadge.innerText = "Sangat Baik (Ideal)";
        scoreBadge.className = "badge badge-emerald";
        scoreNote.innerText = "Laboratorium Anda memenuhi standar keselamatan K3 tinggi setara standar DIII Farmasi Palembang (96.74%).";
      } else if (percent >= 70) {
        scoreBadge.innerText = "Cukup Baik (Perlu Peningkatan)";
        scoreBadge.className = "badge badge-cyan";
        scoreNote.innerText = "Terdapat beberapa elemen penting seperti APAR atau wadah limbah B3 yang perlu disempurnakan.";
      } else if (percent >= 50) {
        scoreBadge.innerText = "Kategori Rendah (Risiko Sedang)";
        scoreBadge.className = "badge badge-amber";
        scoreNote.innerText = "Risiko terjadinya kecelakaan kerja cukup tinggi. Segera lengkapi APD dan SOP darurat.";
      } else {
        scoreBadge.innerText = "Bahaya Kritis (K3 Belum Diterapkan)";
        scoreBadge.className = "badge badge-red";
        scoreNote.innerText = "Laboratorium belum aman untuk praktikum. Potensi bahaya fisik dan kimia sangat tinggi!";
      }
    }
  }

  checkboxes.forEach(cb => {
    cb.addEventListener("change", calculateAudit);
  });

  // Calculate default initially
  calculateAudit();
}

// Interactive Quiz System
let currentQuizIdx = 0;
let quizScore = 0;
let userAnswers = [];

function initQuiz() {
  currentQuizIdx = 0;
  quizScore = 0;
  userAnswers = [];
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const quizBox = document.getElementById("quizBoxContainer");
  if (!quizBox) return;

  if (currentQuizIdx >= quizQuestions.length) {
    // Show Quiz Results
    quizBox.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <div style="width: 4rem; height: 4rem; border-radius: 50%; background: var(--brand-emerald-glow); color: var(--brand-emerald-light); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Kuis K3 Selesai!</h3>
        <p style="margin-bottom: 1.5rem;">Skor Anda: <strong style="color: var(--brand-emerald); font-size: 1.6rem;">${quizScore} / ${quizQuestions.length}</strong> (${Math.round((quizScore/quizQuestions.length)*100)}%)</p>
        <p style="font-size: 0.875rem; color: var(--text-secondary); max-width: 420px; margin: 0 auto 2rem;">
          ${quizScore >= 4 
            ? "Luar biasa! Anda telah memahami konsep K3L, standar keamanan laboratorium, dan prinsip penanganan darurat dengan sangat baik." 
            : "Tetap semangat! Pelajari kembali materi modul 7 indikator lab kimia dan 5 faktor bahaya Suma'mur untuk meningkatkan pemahaman Anda."}
        </p>
        <button class="btn btn-primary" onclick="initQuiz()">
          <span>Ulangi Kuis</span>
        </button>
      </div>
    `;
    return;
  }

  const q = quizQuestions[currentQuizIdx];
  quizBox.innerHTML = `
    <div class="quiz-question-card">
      <div class="quiz-q-num">Pertanyaan ${currentQuizIdx + 1} dari ${quizQuestions.length}</div>
      <div class="quiz-q-text">${q.question}</div>
      <div class="quiz-options" id="quizOptions">
        ${q.options.map((opt, i) => `
          <button class="quiz-opt-btn" onclick="checkQuizAnswer(${i})">
            ${String.fromCharCode(65 + i)}. ${opt}
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quizFeedback"></div>
    </div>
    <div class="quiz-footer">
      <span style="font-size: 0.8rem; color: var(--text-muted);">Skor saat ini: ${quizScore}</span>
      <button class="btn btn-outline btn-sm" id="nextQuizBtn" style="display: none;" onclick="nextQuiz()">
        <span>Pertanyaan Selanjutnya &rarr;</span>
      </button>
    </div>
  `;
}

window.checkQuizAnswer = function(selectedIdx) {
  const q = quizQuestions[currentQuizIdx];
  const buttons = document.querySelectorAll(".quiz-opt-btn");
  const feedback = document.getElementById("quizFeedback");
  const nextBtn = document.getElementById("nextQuizBtn");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) {
      btn.classList.add("correct");
    } else if (idx === selectedIdx) {
      btn.classList.add("wrong");
    }
  });

  if (selectedIdx === q.answer) {
    quizScore++;
    if (feedback) {
      feedback.style.display = "block";
      feedback.style.background = "rgba(16, 185, 129, 0.15)";
      feedback.style.color = "#34d399";
      feedback.style.border = "1px solid rgba(16, 185, 129, 0.3)";
      feedback.innerHTML = `<strong>Jawaban Benar!</strong> ${q.explanation}`;
    }
  } else {
    if (feedback) {
      feedback.style.display = "block";
      feedback.style.background = "rgba(239, 68, 68, 0.15)";
      feedback.style.color = "#f87171";
      feedback.style.border = "1px solid rgba(239, 68, 68, 0.3)";
      feedback.innerHTML = `<strong>Kurang Tepat.</strong> ${q.explanation}`;
    }
  }

  if (nextBtn) {
    nextBtn.style.display = "inline-flex";
  }
};

window.nextQuiz = function() {
  currentQuizIdx++;
  renderQuizQuestion();
};

// Global Modal Dismiss
window.closeGlobalModal = function() {
  const modalBackdrop = document.getElementById("globalModal");
  if (modalBackdrop) modalBackdrop.classList.remove("open");
};

// Close modal when clicking outside of modal-dialog
document.addEventListener("click", (e) => {
  const modalBackdrop = document.getElementById("globalModal");
  if (modalBackdrop && e.target === modalBackdrop) {
    closeGlobalModal();
  }
});
