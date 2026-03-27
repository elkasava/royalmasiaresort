const items = [
  "Amsterdam",
  "·",
  "Suriname",
  "·",
  "Natuur",
  "·",
  "Royal Massia",
  "·",
  "Jungle",
  "·",
  "Rivier",
  "·",
  "Cabanas",
  "·",
  "Rust",
  "·",
];

export default function MarqueeTicker() {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden bg-[#b83428] py-3"
      aria-hidden="true"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div
        style={{
          display: "flex",
          gap: "3.5rem",
          width: "max-content",
          animation: "ticker 28s linear infinite",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "Raleway, sans-serif",
              fontWeight: 200,
              fontSize: "0.62rem",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.88)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
