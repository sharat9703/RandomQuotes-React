import {useState,useEffect} from "react";
import './App.css';

function App() {
  const [quote,setQuote] = useState({});
  useEffect(()=>{
      const getData=async(f)=> {
      let x = await fetch(f);
      let y = await x.json();
      console.log(y);
      setQuote(y);
    }
    getData("https://randomquotes-zn0c.onrender.com/quotes");

  },{});
  return (
    <div className="App">
         <p>{quote.quote}</p>
         <p>{quote.author}</p>
    </div>
  );
}

export default App;
