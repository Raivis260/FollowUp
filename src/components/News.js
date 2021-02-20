import React, { useState } from "react";
import Loading from "../components/Loading";

function News({ news }) {
  if (news) {
    localStorage.setItem("news", JSON.stringify(news));
    return (
      <div>
        <div className="news p-5">
          <div className="row d-flex flex-column ">
            <h1 className="col-12 col-md-4">DELFI {news.title}</h1>
            <p className="col-12 col-md-4">{news.description}</p>

            {JSON.parse(localStorage.getItem("news")).items.map(
              (item, index) => {
                return (
                  <div className="col-12 col-md-4" key={index}>
                    <div className="card p-3 m-2">
                      <img
                        className="card-img-top"
                        src={item.media}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-text">{item.content}</p>
                        <a
                          href={item.link}
                          className="d-block p-3 w-100 custom-button text-center"
                        >
                          Plačiau
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Loading />
      </div>
    );
  }
}

export default News;
