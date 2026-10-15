import "./about.css";

function About() {
  return (
    <div className="aboutPage">
      <div className="aboutBox">

        <div className="aboutText">
          <h1>
            ASL <span>BURGER</span>
          </h1>

          <h2>Biz haqimizda 🍔</h2>

          <p>
            ASL BURGER — mazali va sifatli fast food
            taomlarini sevuvchilar uchun yaratilgan.
          </p>

          <p>
            Biz burger, lavash, hot dog, donar va turli
            xil ichimliklarni yangi mahsulotlardan tayyorlaymiz.
          </p>

          <div className="aboutInfo">
            <div>
              <h3>🍔 Sifat</h3>
              <p>Yangi va sifatli mahsulotlar.</p>
            </div>

            <div>
              <h3>⚡ Tezlik</h3>
              <p>Tez va qulay xizmat.</p>
            </div>

            <div>
              <h3>❤️ Mijoz</h3>
              <p>Sizning mamnunligingiz muhim.</p>
            </div>
          </div>

          <h3 className="aboutTime">
            🕘 Ish vaqti: 09:00 — 23:00
          </h3>
        </div>

        <div className="aboutImage">
          <img src="/aboutburger.png" alt="ASL Burger" />
        </div>

      </div>
    </div>
  );
}

export default About;
