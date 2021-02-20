import React, { useState, useEffect } from "react";
import "./styles/app.scss";
import News from "./components/News";
import Parser from "rss-parser";
function App() {
  const [rssLink, setRssLink] = useState("");
  const [news, setNews] = useState();

  const handleInupt = (e) => {
    setRssLink(e.target.value);
  };

  let parser = new Parser();

  const fetchNews = async (link) => {
    let feed = await parser.parseURL(link);
    setNews(feed);
  };

  const handleSubmit = (e) => {
    fetchNews(rssLink);
  };

  const handleClean = (e) => {
    localStorage.clear();
  };

  return (
    <div className="App">
      <button className="custom-button clean-button" onClick={handleClean}>
        Išvalyti viską
      </button>
      <div className="header text-center p-4">
        <h1 className="p-3">FollowUp</h1>
        <input
          type="text"
          placeholder="RSS Link"
          id="rssInput"
          className="w-50 p-3 rounded"
          onChange={handleInupt}
        ></input>
        <button
          className="custom-button"
          type="submit"
          onClick={handleSubmit}
          className="d-block p-3 w-25 m-auto"
        >
          PRIDĖTI
        </button>
      </div>
      <News news={news} />
    </div>
  );
}

export default App;
