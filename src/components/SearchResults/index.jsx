import PropTypes from "prop-types";

export default function SearchResults({ results }) {
  return (
    <div>
      {results.map((result, idx) => (
        <div key={idx}>
          <h1>{result.title}</h1>
          <h2>{result.author}</h2>
          <a href={result.url}>link</a>
        </div>
      ))}
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.array,
};
