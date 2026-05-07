function App() {
  const products = [
    {
      name: "Asset editing",
      price: "Rp10.000",
      desc: "Templat capcut dan apk edit lainya"
    },
    {
      name: "VPS Premium",
      price: "Rp50.000",
      desc: "Cocok untuk website & bot 24 jam"
    },
    {
      name: "Jasa Website",
      price: "Rp100.000",
      desc: "Landing page modern & cepat"
    }
  ]

  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        fontFamily: "sans-serif"
      }}
    >

      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          position: "sticky",
          top: 0,
          background: "#111827",
          borderBottom: "1px solid #1f2937"
        }}
      >
        <h2 style={{ color: "#a855f7" }}>Vellyns Store</h2>

        <div style={{ display: "flex", gap: "15px" }}>
          <a href="#home" style={link}>Home</a>
          <a href="#produk" style={link}>Produk</a>
          <a href="#contact" style={link}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        style={{
          padding: "80px 20px",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            marginBottom: "20px"
          }}
        >
          Toko Digital Modern 🚀
        </h1>

        <p
          style={{
            color: "#9ca3af",
            maxWidth: "600px",
            margin: "auto"
          }}
        >
          Menjual, Aset editing, topup game, dan kebutuhan digital lainnya.
        </p>

        <a
          href="https://wa.me/6281517527100"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "30px",
            background: "#22c55e",
            color: "white",
            padding: "14px 28px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Chat WhatsApp
        </a>
      </section>

      {/* PRODUK */}
      <section
        id="produk"
        style={{
          padding: "40px 20px"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "35px"
          }}
        >
          Produk Kami
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px"
          }}
        >
          {products.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "20px",
                border: "1px solid #334155"
              }}
            >
              <h3>{item.name}</h3>

              <p style={{ color: "#9ca3af" }}>
                {item.desc}
              </p>

              <h2 style={{ color: "#a855f7" }}>
                {item.price}
              </h2>

              <button
                style={{
                  width: "100%",
                  marginTop: "15px",
                  padding: "12px",
                  border: "none",
                  borderRadius: "12px",
                  background: "#7c3aed",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                Checkout
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        style={{
          marginTop: "60px",
          padding: "30px",
          textAlign: "center",
          borderTop: "1px solid #1f2937",
          color: "#9ca3af"
        }}
      >
        © 2026 Vellyns Store — All Rights Reserved
      </footer>
    </div>
  )
}

const link = {
  color: "white",
  textDecoration: "none"
}

export default App
