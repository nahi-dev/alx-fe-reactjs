import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      style={{
        padding: "10px",
        backgroundColor: "#eee",
        display: "flex", // added for flex layout
        justifyContent: "space-around", // or "space-between", whichever you prefer
        alignItems: "center", // optional, for vertical centering
      }}
    >
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "10px" }}>
        About
      </Link>
      <Link to="/services" style={{ marginRight: "10px" }}>
        Services
      </Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
