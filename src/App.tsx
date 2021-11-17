import React from "react";
import Home from "./app/components/home";
import CountryCardList from "./app/components/CountryCardList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
      <CountryCardList />
    </div>
  );
};

export default App;
