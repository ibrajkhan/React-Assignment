import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./Components/card";
import Header from "./Components/header";
import axios from "axios";
function App() {
  const [userData, setData] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3003/user`).then((res) => setData(res.data));
  }, []);
  return (
    <div className="App">
      <Header />
      {userData.map((item) => {
        return <Cards item={item} />;
      })}
    </div>
  );
}

export default App;
