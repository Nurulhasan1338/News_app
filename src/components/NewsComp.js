import React,{useEffect,useState} from "react";
import "../items.css";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './spinner'

const NewsComp=(props)=>{

const [articles, setArticles] = useState([])
const [loding, setLoding] = useState(false)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)

//   below we are making promise using async so the function will wait till request
//  articles didnt comearticles.json() will convertarticles into json file
 const update = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a19a34b1f0bc44f7bbc7f3bb6c070274&page=${page}&pagesize=${props.pagesize}`;
    // setLoding(true);
    // props.progres(10);
    // let dat = await fetch(url);
    // props.progres(50);
    // let parsedata = await dat.json();
    // props.progres(75);
    // setArticles(parsedata.articles);
    // setTotalResults(parsedata.totalResults);
    // setLoding(false);
    // setPage(page+1);
    // props.progres(100);
  };

  useEffect(() => {
    update();
    // eslint-disable-next-line
  }, []);
  
                                                      
  const fetchMoreData  = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a19a34b1f0bc44f7bbc7f3bb6c070274&page=${page+1}&pagesize=${props.pagesize}`;
   setLoding(true); 
    let dat = await fetch(url);
    let parsedata = await dat.json();
    setArticles(articles.concat(parsedata.articles));
    setTotalResults(parsedata.totalResults);
    setLoding(false);
    setPage(page+1);
      console.log("page no." +page);
  };
    return (
      <>
        
        <h1 className="text-center mystyle">Daily bugs - Top {props.category} News</h1>

        {/* loding symbol */}
        {loding && <Spinner/>}

        {/* <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        > */}
          <div className="container w-100 p-0">

{/* below elements are hetting updateing as  requierd */}

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
        </InfiniteScroll>
      </>
    ); 
};



NewsComp.defaultProps = {
  country: "in",
  pagesize: 20,
  category: "general",
};

NewsComp.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default NewsComp;