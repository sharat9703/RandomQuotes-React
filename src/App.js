import {useState,useEffect} from "react";
import './App.css';

function App() {
  const [quote,setQuote] = useState({});
  const [theme,setTheme] = useState("");
  useEffect(()=>{
      const getData=async(f)=> {
      let x = await fetch(f);
      let y = await x.json();
      console.log(y);
      setQuote(y);
    }
    const changeTheme=()=>{
      
    let colors = ["red","yellow","green","blue","orange","brown"];
    let color = colors[Math.floor(Math.random()*colors.length)];
    
    $(":root").style.setProperty('--mycolor',color);//need to add jquery later

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
