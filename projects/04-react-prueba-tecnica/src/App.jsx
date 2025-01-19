import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`;

const App = () => {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstWord = fact.split(" ", 3).join(" ");
        setImageUrl(`https://cataas.com/cat/says/${firstWord}`);

        // fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
        //   .then((res) => res.json())
        //   .then((response) => {
        //     console.log(response);
        //   });
      });
  }, []);

  return (
    <main>
      <h1>APP de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first word for ${fact}`}
        />
      )}
    </main>
  );
};

export default App;
