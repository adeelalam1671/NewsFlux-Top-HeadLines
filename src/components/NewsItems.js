import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
                {source}
              </span>
          <img
            src={
              !imgUrl
                ? "https://www.detroitnews.com/gcdn/authoring/authoring-images/2025/08/21/PDTN/85763039007-jp-026-005-ch.jpg?crop=2185,1229,x684,y689&width=2185&height=1229&format=pjpg&auto=webp"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}{" "}
              
              <span class="badge text-bg-success">Success</span>
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn bten-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
