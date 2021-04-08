import Matches from "./pages/Matches";
import React, { useState } from "react";
import HomeScreen from "./pages/HomeScreen";

export default function App() {
  const [pages, setPages] = useState(true);

  const changePages = () => {
    setPages(!pages);
  };

  return (
    <div>
      {pages ? (
        <HomeScreen changePages={changePages} />
      ) : (
        <Matches changePages={changePages} />
      )}
    </div>
  );
}
