import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BooksContext } from "./contexts/BooksContext";

const Main = () => {
  const booksLocalStore = JSON.parse(localStorage.getItem("book"));
  const [valueBooks, setValueBooks] = useState(
    booksLocalStore ? booksLocalStore : []
  );

  return (
    <React.StrictMode>
      <BooksContext.Provider value={{ valueBooks, setValueBooks }}>
        <App />
      </BooksContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
