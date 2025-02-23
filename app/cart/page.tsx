"use client";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => {
    const priceString = item.harga.replace("Rp ", "").replace(".", "");
    const price = parseFloat(priceString);
    if (!isNaN(price)) {
      return sum + price * item.quantity;
    } return sum;
  }, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold">Keranjang Belanja</h1>
      {cart.length === 0 ? (
        <p>Keranjang anda kosong</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="border-b py-2">
              <img src={item.gambar} alt={item.nama} style={{ width: "100px" }} />
              <p>{item.nama} - {item.harga} x {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Hapus</button>
            </li>
          ))}
        </ul>
      )}
      <h2 className="text-xl font-bold mt-4">Total: Rp {total.toLocaleString('id-ID')}</h2>

      <button
        onClick={() => router.push("/checkout")}
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "gray",
          color: "white",
          textAlign: "center",
          borderRadius: "5px",
          cursor: "pointer",
          border: "none"
        }}
      >
        Kembali ke Daftar Menu
      </button>
      <p></p>
      <button style={{
        display: "inline-block",
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "lightblue",
        color: "black",
        textAlign: "center",
        borderRadius: "5px",
        cursor: "pointer",
        border: "none"
      }}>Bayar Pesananmu</button>
    </div>
  );
}

