import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/search" style={{ fontSize: "2rem" }}>
        Przejdź do wyszukiwarki
      </Link>
    </div>
  );
}
