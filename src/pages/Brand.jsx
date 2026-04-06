const brands = [
  {
    name: "EcoWear",
    desc: "Organic cotton clothing with zero chemical dyes 🌿",
    location: "India",
  },
  {
    name: "GreenThread",
    desc: "Recycled fabric fashion for modern lifestyle ♻️",
    location: "USA",
  },
  {
    name: "EarthStyle",
    desc: "Minimal carbon footprint clothing 🌍",
    location: "UK",
  },
  {
    name: "ReVibe",
    desc: "Upcycled fashion from waste materials 🔄",
    location: "India",
  },
  {
    name: "NatureFit",
    desc: "Eco-friendly activewear for daily use 🏃‍♀️",
    location: "Canada",
  },
  {
    name: "PureCotton Co.",
    desc: "100% biodegradable clothing line 🌱",
    location: "Australia",
  },
];

function Brand() {
  return (
    <div className="brand-container">
      <h2>🌿 Sustainable Brands</h2>

      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div className="brand-card" key={index}>
            <h3>{brand.name}</h3>
            <p>{brand.desc}</p>
            <span>{brand.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brand;
