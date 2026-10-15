import "./Savat.css";

function Savat({ cart, setCart, cartOpen, setCartOpen }) {
  const removeFromCart = (index) => {
    setCart((oldCart) => oldCart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getPrice = (price) => {
    return Number(String(price).replace(/[^\d]/g, ""));
  };

  const total = cart.reduce((sum, item) => {
    return sum + getPrice(item.narxi);
  }, 0);

  if (!cartOpen) {
    return null;
  }

  return (
    <div
      className="savatModal"
      onClick={() => setCartOpen(false)}
    >
      <div
        className="savatBox"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="savatHeader">
          <h2>🛒 Savat</h2>

          <button
            className="savatClose"
            onClick={() => setCartOpen(false)}
          >
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="savatEmpty">
            <div className="emptyIcon">🛒</div>

            <h3>Savat bo'sh</h3>

            <p>
              Hozircha savatda mahsulot yo'q
            </p>

            <button
              className="continueButton"
              onClick={() => setCartOpen(false)}
            >
              Taomlarni ko'rish
            </button>
          </div>
        ) : (
          <>
            <div className="savatProducts">
              {cart.map((item, index) => (
                <div
                  className="savatItem"
                  key={index}
                >
                  <img
                    src={item.rasm}
                    alt={item.nomi}
                  />

                  <div className="savatItemInfo">
                    <h3>{item.nomi}</h3>

                    <p>{item.narxi}</p>

                    <button
                      className="deleteButton"
                      onClick={() =>
                        removeFromCart(index)
                      }
                    >
                      🗑 O'chirish
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="savatFooter">
              <div className="total">
                <span>Jami:</span>

                <strong>
                  {total.toLocaleString()} so'm
                </strong>
              </div>

              <div className="savatButtons">
                <button
                  className="clearButton"
                  onClick={clearCart}
                >
                  Savatni tozalash
                </button>

                <button
                  className="orderButton"
                  onClick={() => {
                    alert("Buyurtmangiz qabul qilindi!");
                    setCart([]);
                    setCartOpen(false);
                  }}
                >
                  Buyurtma berish
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Savat;