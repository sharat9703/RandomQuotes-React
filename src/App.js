import { useState, useEffect } from "react";
import  "jquery";
import "./App.css";

function App() {
  const [quote, setQuote] = useState({});
  // const [theme,setTheme] = useState("");
  useEffect(() => {
    const getData = async (f) => {
      let x = await fetch(f);
      let y = await x.json();
      console.log(y);
      setQuote(y);
    };
    const changeTheme = () => {
      let colors = ["red", "yellow", "green", "blue", "orange", "brown"];

      let color = colors[Math.floor(Math.random() * colors.length)];

      document.documentElement.style.setProperty("--mycolor", color);
    };
    getData("https://randomquotes-zn0c.onrender.com/quotes");
    changeTheme();
    
  }, {});
  let handleClick=()=>{
          Window.location.reload();
  }
  
  let text = quote.quote;
  let author = quote.author;

  return (
    <div className="App">
      <div className="container text-color">
        <div>
          <div id="quote-box" className="bg-white rounded-3 ">
            <div className="p-4">
              <div>
                <p className="text-start">
                  <i className="fa-solid fa-quote-left"></i>
                  <span id="text" className="h2 ms-1 text-color">
                    People seldom refuse help, if one offers it in the right
                    way.
                  </span>
                  <i className="fa-solid fa-quote-right"></i>
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <p className="float-end ">
                  -
                  <span id="author" className="text-color h4 text-color">
                    A.C. Benson
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-1 mb-3 buttons w-100 p-4 align-content-center d-block-sm">
              <div className="social-media float-start ">
                <a
                  id="tweet-quote"
                  className="p rounded-2  text-white text-decoration-none"
                  href={`twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${text} ${author}`}
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  className="p rounded-2 text-white ms-1 text-decoration-none"
                  href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content=${text}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
                >
                  <i className="fa-brands fa-tumblr"></i>
                </a>
              </div>
              <div className="NewQuote float-end">
                <button
                  id="new-quote"
                  className="p rounded-2 text-decoration-none  opacity-100 text-white"
                  onclick={handleClick}
                >
                  New Quote
                </button>
              </div>
            </div>
          </div>
          <div className="text-white center">
            <small>by sharat</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
