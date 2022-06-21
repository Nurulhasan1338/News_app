import React from "react";
import "../css/items.css";
import Newsitem from "./Newsitem";

const NewsComp=(props)=>{

    return (
      <>
        
        <h1 className="text-center pt-3 mystyle">Daily bugs - Top {props.category} News</h1>

          <div className="container w-100 px-3">

          <div className="d-flex w-100 flex-column justify-content-center p-0">
            {props.articales.map((element) => {
              return (
                <div className="p-1 h-auto" key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    newsId={element.url}
                    imageUrl={element.urlToImage}
                    date={element.publishedAt}
                    author={element.author}
                    />
                </div>
              );
            })}
          </div>
         </div>
      </>
    ); 
};

export default NewsComp;