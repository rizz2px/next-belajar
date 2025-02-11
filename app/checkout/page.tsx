import FoodItem from "./FoodItem";

const items = [
  { id: 1, nama: "Bakmie Ayam", harga: "Rp 15.000", gambar: "https://akcdn.detik.net.id/community/media/visual/2020/06/05/mie-ayam-abang-abang-1_43.jpeg?w=700&q=90" },
  { id: 2, nama: "Bakmie Daging", harga: "Rp 20.000", gambar: "https://akcdn.detik.net.id/community/media/visual/2022/12/19/bakmi-daging-legenda-5.jpeg?w=4032" },
  { id: 3, nama: "Song Mie Ayam", harga: "Rp 16.000", gambar: "https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/e67d1c63-b9d6-4347-8bdb-a0a0491d9ff0_978f8730-e103-45d8-a203-85cd3b289ce9.jpg?resize=728%2C500" },
]

export default function Checkout() {
    return (
      <div>
        {items.map((item) => {
      return <FoodItem key={item.id} nama={item.nama} harga={item.harga} gambar={item.gambar} />
    })}
      </div>
    );
  }