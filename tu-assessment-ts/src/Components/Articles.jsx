import React from 'react';
import './Components.css';

const Articles = () => {
    const articles = [
        {
          id: 1,
          title: "Article 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          id: 2,
          title: "Article 2",
          content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          title: "Article 3",
          content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        },
        {
          id: 4,
          title: "Article 4",
          content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      ];
    
  return (
    <section className="App">
      <header className="App-header">
        {/* ...existing code... */}
      </header>
      {/* ...existing code... */}
      <div className="article-container">
        <div className="article-header">
          <h2>Articles</h2>
          <span className="see-more">See More</span>
        </div>
        <div className="articles">
          {articles.map((article) => (
            <div className="article" key={article.id}>
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-text">{article.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ...existing code... */}
    </section>
  );
};

export default Articles;
