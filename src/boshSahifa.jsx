import { NavLink } from "react-router-dom";
import "./boshSahifa.css";

function BoshSahifa() {
  return (
    <div className="homePage">
      <main>
        <section className="hero">
          <div className="heroText">
            <div className="smallText">
              <span>🔥</span> Eng mazali taomlar bizda!
            </div>

            <h1>
              Eng Mazali
              <span>Burgerlar</span>
            </h1>

            <h2>Sizning lazzat olamingiz!</h2>

            <p>
              ASL BURGER da siz eng sifatli va mazali
              burgerlarni tatib ko‘rishingiz mumkin.
              Har bir taom — bu haqiqiy lazzat!
            </p>

            <NavLink to="/taomlar" className="heroButton">
              Taomlarni ko‘rish <span>⟶</span>
            </NavLink>

            <div className="homeCustomers">
              <span>🍔</span>
              <span>⭐</span>
              <span>❤️</span>
              <p>
                <b>Mazali taomlar</b>
                <small>Har kuni yangi lazzat!</small>
              </p>
            </div>
          </div>

          <div className="homeImage">
            <div className="burgerCircle"></div>
            <div className="burgerRing"></div>

            <span className="floatingFood foodOne">🍅</span>
            <span className="floatingFood foodTwo">🥬</span>
            <span className="floatingFood foodThree">✨</span>
            <span className="floatingFood foodFour">🌶️</span>

            <div className="tasteLabel">
              <span>♛</span>
              <b>Real</b>
              <b>Taste</b>
            </div>

            <img
              src="/bigburger1.png"
              alt="ASL BURGER"
            />
          </div>

          <div className="heroDots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>

        <section className="homeCards">
          <div className="featureCard">
            <div className="featureIcon">🌿</div>
            <div className="featureWatermark">🌿</div>
            <h3>Sifatli Mahsulotlar</h3>
            <p>
              Faqat eng sifatli va tabiiy
              mahsulotlardan foydalanamiz.
            </p>
            <NavLink to="/taomlar">⟶</NavLink>
          </div>

          <div className="featureCard">
            <div className="featureIcon">👨‍🍳</div>
            <div className="featureWatermark">♨</div>
            <h3>Professional Oshpazlar</h3>
            <p>
              Tajribali oshpazlar tomonidan
              mehr bilan tayyorlangan.
            </p>
            <NavLink to="/taomlar">⟶</NavLink>
          </div>

          <div className="featureCard">
            <div className="featureIcon">🛵</div>
            <div className="featureWatermark">➜</div>
            <h3>Tez Yetkazib Berish</h3>
            <p>
              Buyurtmangizni qulay va tez
              yetkazishga intilamiz.
            </p>
            <NavLink to="/taomlar">⟶</NavLink>
          </div>
        </section>
      </main>

      <footer className="homeFooter">
        <div className="footerBrand">
          <span>—</span> ASL BURGER <span>—</span>
        </div>
        <p>MAZALI TAOM · BAHTLI ODAMLAR</p>
      </footer>
    </div>
  );
}

export default BoshSahifa;
