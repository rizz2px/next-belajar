import Link from "next/link";

export function Restaurants() {
  const restaurantList = [
    { id: 1, name: "RM Sederhana", location: "Jakarta" },
    { id: 2, name: "Warung Sederhana", location: "Bandung" },
    { id: 3, name: "Lesehan Sederhana", location: "Surabaya" },
    { id: 4, name: "Angkringan Sederhana", location: "Malang" },
  ];

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Selamat Datang di Go-Makan</h1>
      <h2 className="text-xl mb-4">Daftar Restoran</h2>
      <ul className="bg-white p-4 shadow-md rounded-lg">
        {restaurantList.map((restaurant) => (
          <li key={restaurant.id} className="border-b py-2">
            <Link href={`/checkout?restaurant=${restaurant.id}`} className="text-blue-500 underline">
              {restaurant.name} - {restaurant.location}
            </Link>
          </li>
        ))}
      </ul>
      {/*
      <Link href="/" className="text-blue-500 underline mt-4 block">
        Kembali ke Menu
      </Link> */}
    </div>
  );
}

export default Restaurants;