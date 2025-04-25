import { stripHtml } from '../utils';

type ArticleProps = {
  article: {
    pageid: number;
    title: string;
    snippet: string;
  };
};

const Article: React.FC<ArticleProps> = ({ article }) => {
  const url = `https://en.wikipedia.org/?curid=${article.pageid}`;
  const title = stripHtml(article.title) || '';
  const snippet = stripHtml(article.snippet) || '';

  return (
    <article>
      <a href={url} title={title}>
        <h2>{title}</h2>
      </a>
      <div className="summary">{snippet}...</div>
    </article>
  );
};

export default Article;