import React,{useState} from "react";
import "../items.css";
import Newsitem from "./Newsitem";
import Articles from './articles';


const NewsComp=(props)=>{

const [articles, setArticles] = useState(Articles)

    return (
      <>
        
        <h1 className="text-center mystyle">Daily bugs - Top News</h1>

          <div className="container w-100 p-0">

          <div className="d-flex w-100 flex-column justify-content-center p-0">
            {articles.map((element) => {
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