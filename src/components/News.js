import React from "react";
import Loading from "../components/Loading";

function News({ news }) {
  if (news == null) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    if (news.length !== 0) {
      return (
        <div>
          <div className="news p-5">
            <div className="row d-flex  ">
              <h1 className="col-12">{news.title}</h1>
              <p className="col-12">{news.description}</p>

              {news.items.map((item, index) => {
                return (
                  <div className="col-12 col-lg-4" key={index}>
                    <div className="card m-2 p-2 h-100 ">
                      <img
                        className="card-img-top "
                        src={item.media[0].$.url}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-text">{item.content}</p>
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        className="d-block p-3 w-100 custom-button text-center"
                      >
                        Plačiau
                      </a>
                    </div>
                  </div>
                );
              })}
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
}

export default News;
