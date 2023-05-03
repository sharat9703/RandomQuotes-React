import { useState,useEffect } from "react";
import  "jquery";
import "./App.css";

function App() {
  
  // const [theme,setTheme] = useState("");
  
  
  const [quote, setQuote] = useState({});
  
  const getData = async (f) => {
    let x = await fetch(f);
    let y = await x.json();
    console.log(y);
    setQuote(y);
    
  };
  const changeTheme = () => {
    let colors = ["red", "pink", "green", "blue", "orange", "brown","purple","violet","Tomato"];

    let color = colors[Math.floor(Math.random() * colors.length)];

    document.documentElement.style.setProperty("--mycolor", color);
  };
  const handleClick=()=>{
   
    getData("https://randomquotes-zn0c.onrender.com/quotes");
    changeTheme();
    
  }
  let text = quote.quote?quote.quote:" Solitude vivifies; isolation kills.";
  let author = quote.author?quote.author:"Joseph Roux";
  
  useEffect(()=>{
    
    let text = document.getElementById('text');
    let author = document.getElementById('author'); 
    
     text.innerText = quote.quote?quote.quote:"Solitude vivifies; isolation kills.";
     author.innerText = quote.author?quote.author:"Joseph Roux";
  });
  

  return (
    <div className="App container">
      <div className=" text-color">
        <div>
          <div id="quote-box" className="bg-white rounded-3 ">
            <div className="p-4">
              <div>
                <p className="text-start">
                  <i className="fa-solid fa-quote-left"></i>
                   <span id="text" className="h2 ms-1 text-color">
                   
                  </span>
                   <i className="fa-solid fa-quote-right"></i>
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <p className="float-end ">
                  -
                  <span id="author" className="text-color h4 text-color">
                    Joseph Roux
                  </span>
                </p>
              </div>
            </div>
            <div className="mb-3 buttons w-100 p-3 align-content-center d-block-sm">
              <div className="social-media float-start mb-sm-3 mb-xs-3">
                <button className="p rounded-2 me-1 borders-none">
                <a
                  id="tweet-quote"
                  className=" text-white  text-decoration-none"
                  href={`https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${text} - ${author}`}
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                </button>
                <button className="p rounded-2 ms-1 borders-none ">
                <a
                  className=" text-white text-decoration-none"
                  href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content=${text}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
                >
                  <i className="fa-brands fa-tumblr"></i>
                </a>
                </button>
              </div>
              <div className="NewQuote float-end mb-sm-2 mt-sm-1">
                <button
                  id="new-quote"
                  className="p rounded-2 text-decoration-none  opacity-100 text-white borders-none" 
                  onClick={handleClick}
                >
                  New Quote
                </button>
              </div>
            </div>
          </div>
          <div className=" center">
            <small><a href={`https://github.com/sharat9703`} className="text-white text-decoration-none">by sharat</a></small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
