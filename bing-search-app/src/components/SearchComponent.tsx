import React, { useState } from 'react';
import SearchService from '../services/SearchService';
import './SearchComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface SearchResult {
  id: string;
  name: string;
  url: string;
}

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [searchAttempted, setSearchAttempted] = useState<boolean>(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError('');

      const results = await SearchService.search(searchTerm);
      setSearchResults(results);
    } catch (error) {
      if (error instanceof Error) {
        setError(`Error fetching search results: ${error.message}`);
      } else {
        setError('Unknown error occurred');
      }
    } finally {
      setLoading(false);
      setSearchAttempted(true);
    }
  };

  return (
    <div className="container mt-5"> 
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleSearch} disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </div>

      {searchAttempted && !loading && searchResults.length === 0 && (
        <div className="alert alert-warning" role="alert">
          No results found.
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error.includes('404') ? 'No results found.' : `Error fetching search results: ${error}`}
        </div>
      )}

      <ul className="list-group">
        {searchResults.map((result) => (
          <li key={result.id} className="list-group-item">
            <a href={result.url} target="_blank" rel="noopener noreferrer" title={`Visit ${result.name}`}>
              {result.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
