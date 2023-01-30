// import logo from './logo.svg';
import './App.css';
import missedArticles from './_data/missed-articles.json';
import yourArticles from './_data/your-articles.json';
import Article from './Article/Article';


// https://www.pluralsight.com/guides/iterate-through-a-json-response-in-jsx-render-for-reactjs

console.log(missedArticles);
console.log(yourArticles);

/*
yourArticles.map((article) => {
  console.log(article);
}); */

function App() {

  return (
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
  );

};

export default App;
