import "./ichimliklar.css";
import { useState } from "react";

function Ichimliklar({ addToCart }) {
  const [search, setSearch] = useState("");

  const drinks = [
    { nomi: "Coca-Cola", narxi: "18 000 so'm", rasm: "/cola.png", tur: "gazli" },
    { nomi: "Pepsi", narxi: "18 000 so'm", rasm: "/pepsi.png", tur: "gazli" },
    { nomi: "Fanta", narxi: "18 000 so'm", rasm: "/fanta.png", tur: "gazli" },
    { nomi: "Sprite", narxi: "16 000 so'm", rasm: "/sprite.png", tur: "gazli" },
    { nomi: "Mirinda", narxi: "16 000 so'm", rasm: "/mirinda.png", tur: "gazli" },
    { nomi: "Adrenaline", narxi: "15 000 so'm", rasm: "/Adrenaline.png", tur: "gazli" },
    { nomi: "Flash", narxi: "15 000 so'm", rasm: "/Flash.png", tur: "gazli" },
    { nomi: "Red Bull", narxi: "20 000 so'm", rasm: "/Red Bull.png", tur: "gazli" },
    { nomi: "Mountain Dew", narxi: "18 000 so'm", rasm: "/Mountain Dew.png", tur: "gazli" },
    { nomi: "Mineral", narxi: "6 000 so'm", rasm: "/mineral.png", tur: "gazsiz" },
    { nomi: "Oddiy suv", narxi: "5 000 so'm", rasm: "/oodiysuv.png", tur: "gazsiz" },
    { nomi: "Bonaqua", narxi: "7 000 so'm", rasm: "/bonaqua.png", tur: "gazsiz" },
    { nomi: "Pure Life", narxi: "7 000 so'm", rasm: "/purelife.png", tur: "gazsiz" },
    { nomi: "Olma Sharbati", narxi: "5 000 so'm", rasm: "/olma.png", tur: "gazsiz" },
  ];

  const filteredDrinks = drinks.filter((drink) =>
    drink.nomi.toLowerCase().includes(search.toLowerCase())
  );

  const gazli = filteredDrinks.filter((drink) => drink.tur === "gazli");
  const gazsiz = filteredDrinks.filter((drink) => drink.tur === "gazsiz");

  const drinkCard = (drink) => (
    <div className="drink-card" key={drink.nomi}>
      <div className="drink-image">
        <img src={drink.rasm} alt={drink.nomi} />
      </div>

      <h3>{drink.nomi}</h3>
      <p className="drink-price">{drink.narxi}</p>

      <button
        className="drink-button"
        onClick={() => addToCart(drink)}
      >
        🛒 Savatga qo'shish
      </button>
    </div>
  );

  return (
    <div className="ichimliklar">
      <h1 className="drink-title">Bizning Ichimliklar</h1>

      <input
        className="drink-search"
        type="text"
        placeholder="⌕  Ichimlik nomini kiriting"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="drink-boxes">
        {gazli.map(drinkCard)}
      </div>

      {gazli.length === 0 && search && (
        <p className="drink-empty">Gazli ichimlik topilmadi</p>
      )}

      <div className="suvlar">
        <h1 className="drink-title">Gazsiz Ichimliklar</h1>

        <div className="drink-boxes gazsiz-boxes">
          {gazsiz.map(drinkCard)}
        </div>

        {gazsiz.length === 0 && search && (
          <p className="drink-empty">Gazsiz ichimlik topilmadi</p>
        )}
      </div>
    </div>
  );
}

export default Ichimliklar;