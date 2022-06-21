import "../css/items.css";
import React from "react";

  const newsitem=(props)=>{
    let def_url =
    "https://www.dairyfoods.com/ext/resources/2021/12/09/News-default-780x439.jpg?height=400&t=1641484867&width=auto";
    let { title, description, imageUrl, newsId,date,author} = props;

    // below date function will create object of the given date string
    

    return (
      <div>
        <div className="overflow-hidden mycard mt-3 pb-3">
          <div className="cold">
            <img
              src={!imageUrl ? def_url : imageUrl}
              className="robinhood"
              alt=""
            />
            <a
              href={newsId}
              target="_blank"
              rel="noreferrer"
              className="btn btn-warning m-3"
            >
              Read more
            </a>
          </div>
          <h5 className=" fw-bolder fs-2 p-2">{title}</h5>
          <p className="card-text me-2"><small className="text-muted">By {author} at {Date(date)}</small></p>
          <p className="p-2 mb-3">{description}</p>
        </div>
      </div>
    );
  }
    export default newsitem;