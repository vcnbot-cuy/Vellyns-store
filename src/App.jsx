function App() {
  return (
    <div style={{
      background: "#0f0f0f",
      color: "white",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
      
      <h1 style={{fontSize: "40px"}}>
        Vellyns Store
      </h1>

      <p>Toko digital modern 🚀</p>

      <div style={{
        background: "#1e1e1e",
        padding: "20px",
        borderRadius: "16px",
        marginTop: "20px"
      }}>
        <h2>Produk</h2>

        <p>✔ Panel Pterodactyl</p>
        <p>✔ VPS</p>
        <p>✔ Jasa Website</p>

        <button style={{
          padding: "12px 20px",
          border: "none",
          borderRadius: "10px",
          background: "purple",
          color: "white",
          marginTop: "10px"
        }}>
          Beli Sekarang
        </button>
      </div>

    </div>
  )
}

export default App
