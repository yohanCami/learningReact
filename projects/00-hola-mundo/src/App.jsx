import TwitterFollowCard from "./TwitterFollowCard.jsx";
import "./App.css";

const App = () => {
  return (
    <section className="App">
      <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" />
      <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" />
    </section>
  );
};

export default App;
