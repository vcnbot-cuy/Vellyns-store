import './App.css'

function App() {
  const games = [
    {
      name: 'MLBB',
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/1203220/header.jpg',
    },
    {
      name: 'PUBG Mobile',
      image:
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Free Fire',
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'COD Mobile',
      image:
        'https://images.unsplash.com/photo-1548686304-89d188a80029?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Point Blank',
      image:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Ragnarok',
      image:
        'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="logo">V</div>

        <input
          type="text"
          placeholder="Cari Game atau Voucher"
          className="search"
        />

        <div className="menu">☰</div>
      </header>

      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>TOP UP GAME</h1>
          <p>Lebih hemat mabar jadi semangat</p>

          <button>Topup Sekarang</button>
        </div>
      </section>

      <section className="category">
        <button className="active">All</button>
        <button>Top Up</button>
        <button>Voucher</button>
        <button>Pembayaran</button>
      </section>

      <section className="products">
        {games.map((game, index) => (
          <div className="card" key={index}>
            <img src={game.image} alt={game.name} />

            <div className="card-body">
              <h3>{game.name}</h3>

              <button>Beli</button>
            </div>
          </div>
        ))}
      </section>

      <a
        href="https://wa.me/6281517527100"
        target="_blank"
        className="wa"
      >
        💬
      </a>
    </div>
  )
}

export default App
