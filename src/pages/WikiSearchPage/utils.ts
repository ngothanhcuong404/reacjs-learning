export type SearchResult = {
    pageid: number;
    title: string;
    snippet: string;
};
export const stripHtml = (html: string): string | null => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent;
};


export const search = async (searchTerm: string): Promise<SearchResult[]> => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srsearch=${searchTerm}`;
    const response = await fetch(url);
    const results = await response.json();
    return results.query.search;
};