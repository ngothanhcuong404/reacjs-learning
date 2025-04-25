import React from 'react';
import Article from '../Article';

type ArticleType = {
  pageid: number;
  title: string;
  snippet: string;
};

type ArticleListProps = {
  articles: ArticleType[];
};

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    const renderedArticles = articles.map((article) => (
      <Article key={article.pageid} article={article} />
    ));
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderedArticles}
      </div>
    );
  };

export default ArticleList;