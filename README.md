
PT TEGUH CITA MADANI — Static Website (Ready-to-Use)
====================================================

File ini berisi website static multi-halaman yang dapat dibuka langsung melalui browser
atau di-upload ke layanan hosting seperti GitHub Pages, Netlify, atau Vercel.

No uploaded logo found — created a simple SVG logo as placeholder.

Isi paket:
- index.html
- tentang.html
- produk.html
- kelas-online.html
- outbound.html
- galeri.html
- blog.html
- kontak.html
- login.html
- style.css
- script.js
- images/ (logo + gambar contoh)
- README.md

Cara menjalankan lokal:
1. Extract zip ke folder.
2. Buka file `index.html` di browser (double-click).

Mengaktifkan Google Sign-In (opsional, perlu langkah tambahan):
1. Buka https://console.developers.google.com/ -> buat project -> OAuth Client ID (Web).
2. Tambahkan origin dan redirect URL sesuai tempat hosting (untuk testing lokal, gunakan http://localhost).
3. Ganti tombol placeholder di login.html dengan integrasi Google Identity Services menggunakan Client ID.

Mengganti logo:
- Ganti file di `images/logo.svg` (atau images/logo.png jika anda menyertakan) dengan file logo Anda.

Deploy ke GitHub Pages:
1. Push repository ke GitHub.
2. Di Settings -> Pages, pilih branch yang memuat index.html.
3. Situs akan tersedia di https://<username>.github.io/<repo>

Catatan:
- Login & admin pada paket ini bersifat demo (localStorage). Untuk fitur backend penuh (user authentication, database), saya bisa bantu buatkan versi Firebase/Node.js bila Anda mau.
