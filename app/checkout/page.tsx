import FoodItem from "./FoodItem";
import Link from "next/link";

const items = [
  { id: 1, nama: "Bakmie Ayam", harga: "Rp 15.000", gambar: "https://akcdn.detik.net.id/community/media/visual/2020/06/05/mie-ayam-abang-abang-1_43.jpeg?w=700&q=90" },
  { id: 2, nama: "Bakmie Daging", harga: "Rp 20.000", gambar: "https://akcdn.detik.net.id/community/media/visual/2022/12/19/bakmi-daging-legenda-5.jpeg?w=4032" },
  { id: 3, nama: "Song Mie Ayam", harga: "Rp 16.000", gambar: "https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/e67d1c63-b9d6-4347-8bdb-a0a0491d9ff0_978f8730-e103-45d8-a203-85cd3b289ce9.jpg?resize=728%2C500" },
  { id: 4, nama: "Es Teh", harga: "Rp 5.000", gambar: "https://asset.kompas.com/crops/-EW4dZIFD3U055K4qtHqSgUg_hM=/92x67:892x600/1200x800/data/photo/2023/08/23/64e59deb79bfb.jpg" },
  { id: 5, nama: "Es Degan", harga: "Rp 8.000", gambar: "https://www.tokomesin.com/wp-content/uploads/2015/03/es-kelapa-muda-tokomesin.jpg" },
  { id: 6, nama: "Jus Alpukat", harga: "Rp 10.000", gambar: "https://dcostseafood.id/wp-content/uploads/2021/12/Jus-Alpukat.jpg" },
]

export default function Checkout() {
  return (
    <div>
      <h1>Daftar Menu</h1>
      {items.map((item) => (
        <FoodItem key={item.id} id={item.id} nama={item.nama} harga={item.harga} gambar={item.gambar} />
      ))}

      {/* Tombol untuk lanjut ke halaman keranjang */}
      <Link href="/cart">
        <button style={{ marginTop: "20px", padding: "10px", backgroundColor: "blue", color: "white" }}>
          Lanjut ke Keranjang
        </button>
      </Link>

    </div>
  );
}