import axios from "axios";
import { useMemo, useState } from "react";
import PropTypes from "prop-types";

export default function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const articles = useMemo(async () => {
    const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
    return res.data.hits;
  }, [query]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    onSearch(await articles);
  };

  const handleChange = (ev) => {
    setQuery(ev.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} />
      <button type="submit">Szukaj</button>
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
};
