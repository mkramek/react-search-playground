import { useState } from "react";
import SearchComponent from "../components/Search";
import SearchResults from "../components/SearchResults";
import { Link } from "react-router-dom";

export default function Search() {
  const [articles, setArticles] = useState([]);

  const handleSearch = (list) => {
    setArticles(list);
  };

  return (
    <div>
      <Link to="/">
        Powrót do strony głównej
      </Link>
      <SearchComponent onSearch={handleSearch} />
      <SearchResults results={articles} />
    </div>
  );
}
