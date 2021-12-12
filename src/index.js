import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BooksContext } from "./contexts/BooksContext";
import { IdContext } from "./contexts/idContext";

const Main = () => {
  const booksLocalStore = JSON.parse(localStorage.getItem("book"));
  const [valueBooks, setValueBooks] = useState(
    booksLocalStore ? booksLocalStore : []
  );
  const [id, setId] = useState(null);

  return (
    <React.StrictMode>
      <BooksContext.Provider value={{ valueBooks, setValueBooks }}>
        <IdContext.Provider value={{ id, setId }}>
          <App />
        </IdContext.Provider>
      </BooksContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
