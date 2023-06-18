import React from 'react';
import './Components.css';

const Articles = () => {
    const articles = [
        {
          id: 1,
          title: "Best Summer Outfit Style",
          author: "14 Feb . Livina Style",
          content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

        },
        {
          id: 2,
          title: "Best Summer Outfit Style",
          author: "14 Feb . Livina Style",
          content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          id: 3,
          title: "Best Summer Outfit Style",
          author: "14 Feb . Livina Style",
          content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          id: 4,
          title: "Best Summer Outfit Style",
          author: "14 Feb . Livina Style",
          content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ];

     
    
  return (
    <section className="App">
      <header className="App-header">
      </header>
      <div className="article-container">
        <div className="article-header">
          <h2 className="article-title">Get Better Insights<br/> from Our Articles</h2>
          <h5 className="see-more">See More</h5>
        </div>
        <div className="articles">
          {articles.map((article) => (
            <div className="article" key={article.id}>
              <div className="article-content">
                <p className="article-author">{article.author}</p>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-text">{article.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
