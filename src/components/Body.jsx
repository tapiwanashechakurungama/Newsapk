import { useState, useEffect } from "react";
import { GiSelfLove } from "react-icons/gi";


function Body() {
  const [data, setData] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null); // Track selected article

  const [love , setLove] = useState("black")

  const handleArticleClick = (article) => {
    setSelectedArticle(article); // Selecting articles on click  article on click
  };

  const handleGoBack = () => {
    setSelectedArticle(null); //Going back to home page article on go back
  };

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2024-08-18&to=2024-08-18&sortBy=popularity&apiKey=149802131f3242358ba6da013dbc31cf"
      );
      const data = await response.json();
      setData(data.articles);
    }
    getData();
  }, []);
  console.log(data);

  return (
    <>
      <div className="background container"></div>
      {selectedArticle ? (
        <div className="full-article container mx-auto p-4 mt-10  gap-6">
          <img
            src={selectedArticle.urlToImage}
            alt=""
            className="full-width-image rounded mb-4 h-[60vh]"
          />
          <div className="content flex flex-col gap-4 text-left">
            <h1 className="text-3xl font-bold">{selectedArticle.title}</h1>
            <p className="text-1xl">{selectedArticle.description}</p>
            <p className="aurthor">
              Author
              <span className="text-orange-400">
                {" "}
                :{selectedArticle.author}
              </span>
            </p>
            <p
              className="likes"
              style={{ color: love }}
              onClick={() => {
                setLove("red");
              }}
            >
              Likes <GiSelfLove />
              {Math.floor(Math.random() * 100000 + 1)}
            </p>
            <button
              onClick={handleGoBack}
              className="bg-red-500 text-white rounded-sm p-2 w-[10rem]"
            >
              Go Back
            </button>
          </div>
        </div>
      ) : (
        <div className="row container pt-[10vh]">
          {data.map((onedata) => (
            <div className="container" key={Math.random() * 80000}>
              <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container flex justify-between mt-10"
                  key={Math.random() * 50000}
                >
                  <img
                    src={onedata.urlToImage}
                    alt=""
                    className="rounded"
                    width={800}
                  />
                  <div className="content flex flex-col gap-3">
                    <h1>{onedata.title}</h1>
                    <p className="aurthor">
                      Author
                      <span className="text-orange-400">
                        {" "}
                        :{onedata.author}
                      </span>
                    </p>
                    <p className="time">
                      Posted at{" "}
                      <span className="text-orange-400">
                        {" "}
                        :{onedata.publishedAt}
                      </span>
                    </p>
                    <button
                      className="article text-left p-2 bg-green-400 text-white rounded-sm"
                      onClick={() => handleArticleClick(onedata)}
                    >
                      Read Article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Body;
