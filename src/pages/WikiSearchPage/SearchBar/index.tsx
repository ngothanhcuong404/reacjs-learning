import { useState } from 'react';

type SearchBarProps = {
  onSearch: (term: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
    <input
      type="search"
      name="searchTerm"
      id="searchTerm"
      placeholder="Enter a search term..."
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
      Search
    </button>
  </form>
  );
};

export default SearchBar;