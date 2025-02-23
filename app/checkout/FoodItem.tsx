"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext"; // Pastikan path sesuai

function FoodItem(props) {
  const [count, setCount] = useState(0);
  const { addToCart } = useCart(); // Menggunakan context

  const tambah = () => {
    setCount((prevCount) => prevCount + 1);
    addToCart({
      id: props.id,
      nama: props.nama,
      harga: props.harga,
      gambar: props.gambar,
      quantity: count + 1
    });
  };

  const kurang = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <p>
        <img
          src={props.gambar}
          alt={props.nama}
          style={{ width: "200px", height: "auto" }}
        />
      </p>
      <p>{props.nama} - {props.harga}</p>
      {count === 0 ? (
        <button onClick={tambah}>Tambah</button>
      ) : (
        <div>
          <button onClick={kurang}>-</button>
          {count}
          <button onClick={tambah}>+</button>
        </div>
      )}
    </div>
  );
}

export default FoodItem;
