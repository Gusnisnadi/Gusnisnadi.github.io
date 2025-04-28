// Ambil referensi untuk semua elemen
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const rightButton = document.querySelector('.tombol-kanan1');
const leftButton = document.querySelector('.tombol-kiri1');
const images = document.querySelectorAll('.gambar-project img');
const popup = document.getElementById('popup-menu');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const closeBtn = document.querySelector('.close-btn');
const portfolioSection = document.querySelector('.portofolio');
const projectData = {
    kalkulator: {
        title: 'Calculator apk',
        description: 'Aplikasi Kalkulator untuk android yang dibuat di android studio dengan bahasa pemrograman Java.',
        image: 'gambar/kalkulator.jpeg'
    },
    hangman: {
        title: 'Hangman Game',
        description: 'Game Hangman yang dibuat menggunakan Python GUI yaitu tkinter.',
        image: 'gambar/hangman game.png'
    }
};
let currentSectionIndex = 0; // lacak section yang sedang active

if(currentSectionIndex = 0) {
    leftButton.classList.add('hidden');
}
// Fungsi untuk memperbarui active section dan nav links yang aktif
function updateVisibleSection(index) {
    // sembunyikan semua sections and hapus active class dari nav links
    sections.forEach((section, idx) => {
        if (idx === index) {
            section.classList.remove('hidden');
            section.classList.add('visible','masuk');
        } else {
            section.classList.add('hidden');
            section.classList.remove('visible','masuk');
        }
    });

    navLinks.forEach((link, idx) => {
        if (idx === index) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    if(currentSectionIndex === 0) {
        leftButton.classList.add('hidden','tkikeluar');
        leftButton.classList.remove('visible','tkimasuk');
    }   else {
        leftButton.classList.remove('hidden','tkikeluar');
        leftButton.classList.add('visible','tkimasuk');
    };
    if(currentSectionIndex === sections.length-1) {
        rightButton.classList.add('hidden','tkakeluar');
        rightButton.classList.remove('visible','tkamasuk');
    } else {
        rightButton.classList.remove('hidden','tkakeluar');
        rightButton.classList.add('visible','tkamasuk');
    };
}

// Event listeners untuk navigation links
navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentSectionIndex = index; // Perbarui indeks bagian current
        updateVisibleSection(currentSectionIndex);
    });
});

// Event listener untuk tombol kanan
rightButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        updateVisibleSection(currentSectionIndex);
    }
});

// Event listener for tombol kiri
leftButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentSectionIndex > 0) {
        currentSectionIndex--;
        updateVisibleSection(currentSectionIndex);
    }
});

// Inisialisasi bagian pertama menjadi terlihat
updateVisibleSection(currentSectionIndex);

// Tutup popup dengan mengklik di luar konten popup
window.addEventListener('click', (e) => {
    // Periksa apakah klik berada di luar konten popup
    if (e.target === popup) {
        closePopup();
    }
});

// Fugsi untuk menutup popup
function closePopup() {
    popup.classList.add('hidden');
    portfolioSection.classList.remove('blur');
    document.body.style.pointerEvents = 'auto'; // menyalakan ulang interaksi
}

// menampilkan popup ketika gambar dipencet
images.forEach((img) => {
    img.addEventListener('click', () => {
        const projectKey = img.classList.contains('kal1') ? 'kalkulator' : 'hangman';

        // Perbarui konten pop-up
        popupImg.src = projectData[projectKey].image;
        popupTitle.textContent = projectData[projectKey].title;
        popupDescription.textContent = projectData[projectKey].description;

        // Tampilkan popup dan buramkan latar belakang
        popup.classList.remove('hidden');
        portfolioSection.classList.add('blur');

        // Nonaktifkan interaksi dengan elemen lain
        document.body.style.pointerEvents = 'none'; // matikan interaksi
        popup.style.pointerEvents = 'auto'; // Izinkan interaksi dengan popup
    });
});

// tutup popup pake closeBtn
closeBtn.addEventListener('click', () => {
    closePopup();
});
