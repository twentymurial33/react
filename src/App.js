import Quotes from "./components/Quotes";
import Quotesdata from "./components/QuotesData";
import Button from "./components/Button";
import "./App.css";

function App() {
  const randomQuotes = Quotesdata.map((quote) => {
    return <Quotes heading={quote.heading} author={quote.author} />;
  });
  return (
    <div className="App">
      <header
        style={{
          color: "black",
          textAlign: "center",
          fontSize: "120px",
          backgroundColor: "pink",
        }}
      >
        Quote Generator
        <hr></hr>
      </header>
      {randomQuotes}
      <Button onClick="Add Me" />
    </div>
  );
}

export default App;
