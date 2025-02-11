"use client"
import { useState } from "react";

function FoodItem(props){
    const [count, setCount] = useState(0);
  
    const tambah = () => {
      setCount(count + 1);
    }
  
    const kurang = () => {
      if(count === 0){
        return;
      }
      setCount(count - 1);
    }
    
    return <div>
      <p><img src={props.gambar} alt={props.nama} style={{ width: "200px", height: "auto"}}></img></p>
      <p>{props.nama} {props.harga}</p>
      {count == 0 && <button onClick={tambah}>Tambah</button>}
      {count >= 1 && <div><button onClick={kurang}>-</button>{count}<button onClick={tambah}>+</button></div>}
    </div>
  }

 export default FoodItem;