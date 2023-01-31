import './App.css';
import missedArticles from './_data/missed-articles.json';
import yourArticles from './_data/your-articles.json';
import Article from './Article/Article';

function App() {

  return (
    <div>
      <div>
        <span className='section-category'> For you </span>
        <hr></hr>
      </div>
      <div>
        {yourArticles.map(article => (
  
          <Article 
            author={article.author}
            description={article.description}
            hasAudioAvailable={article.hasAudioAvailable}
            image={article.image}
            link={article.link}
            memberPreview={article.memberPreview}
            minutesToRead={article.minutesToRead}
            postedDate={article.postedDate}
            title={article.title}
          />
        ))}
      </div>
      <div>
        <span className='section-category'> In case you missed it </span>
        <hr></hr>
      </div>
      <div>
        {missedArticles.map(article => (
            <Article 
            author={article.author}
            description={article.description}
            hasAudioAvailable={article.hasAudioAvailable}
            image={article.image}
            link={article.link}
            memberPreview={article.memberPreview}
            minutesToRead={article.minutesToRead}
            postedDate={article.postedDate}
            title={article.title}
          />
        ))}
      </div>
    </div>
  );

};

export default App;
