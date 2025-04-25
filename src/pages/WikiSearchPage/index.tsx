import { FC, useState } from "react";
import SearchBar from "./SearchBar";
import ArticleList from "./ArticleList";
import { SearchResult, search } from "./utils";


const WikiSearchPage: FC = () => {
    const [articles, setArticles] = useState<SearchResult[]>([]);


    const handleSearch = async (searchTerm: string): Promise<void> => {
        const results: SearchResult[] = await search(searchTerm);
        setArticles(results);
    };
    return (
        <>
<header className="bg-blue-600 text-white py-4">
  <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold text-center">Wikipedia Search</h1>
    <div className="mt-4">
      <SearchBar onSearch={handleSearch} />
    </div>
  </div>
</header>
<main id="searchResult" className="container mx-auto px-4 py-6">
  <ArticleList articles={articles} />
</main>
        </>
    );

}
export default WikiSearchPage;