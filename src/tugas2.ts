interface Buku {
  judul: string;
  pengarang: string;
  tahunTerbit: number;
  tersedia: boolean;
}

const buku: Buku = {
  judul: "Pemrograman Web Lanjutan",
  pengarang: "Syahru Rahmayuda",
  tahunTerbit: 2026,
  tersedia: true
};

console.log(buku);
