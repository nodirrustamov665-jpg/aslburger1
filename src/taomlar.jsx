import "./taomlar.css";
import { useState } from "react";

function Taomlar({ addToCart }) {
  const [search, setSearch] = useState("");

  const foods = [
    {
      nomi: "Lavash",
      narxi: "18 000 so'm",
      rasm: "/Lavash.png",
    },
    {
      nomi: "Big-Burger",
      narxi: "25 000 so'm",
      rasm: "/bigburger1.png",
    },
    {
      nomi: "Chicken Burger",
      narxi: "28 000 so'm",
      rasm: "/chicken.png",
    },
    {
      nomi: "Hot Dog",
      narxi: "20 000 so'm",
      rasm: "/HotDog.png",
    },
    {
      nomi: "Donar",
      narxi: "27 000 so'm",
      rasm: "/Donar.png",
    },
    {
      nomi: "Nuggets",
      narxi: "22 000 so'm",
      rasm: "/Nuggets.png",
    },
    {
      nomi: "Kartoshka Fri",
      narxi: "15 000 so'm",
      rasm: "/Fri.png",
    },
    {
      nomi: "Cheese Burger",
      narxi: "30 000 so'm",
      rasm: "/CheeseBurger.png",
    },
    {
      nomi: "Double Burger",
      narxi: "35 000 so'm",
      rasm: "/DoubleBurger.png",
    },
    {
      nomi: "Shourma",
      narxi: "35 000 so'm",
      rasm: "/shourma.png",
    },
  ];

  const filteredFoods = foods.filter((food) =>
    food.nomi
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="taomlar">
      <h1 className="title">
        Bizda Bor Taomlar
      </h1>

      <input
        type="text"
        placeholder="Taom nomini kiriting"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="food-boxes">
        {filteredFoods.map((food) => (
          <div
            className="food-card"
            key={food.nomi}
          >
            <img
              src={food.rasm}
              alt={food.nomi}
            />

            <h3>{food.nomi}</h3>

            <p>{food.narxi}</p>

            <button
              onClick={() => {
                addToCart(food);
                alert(
                  `${food.nomi} savatga qo'shildi`
                );
              }}
            >
              🛒 Savatga qo'shish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Taomlar;