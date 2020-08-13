import React, {useState, useEffect} from "react";
import "./App.css";

import Body from './Body'
import Footer from './Footer'
import axios from "axios"


function App(props) {
  const [data, setData] = useState(props)
  

useEffect(()=>{
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(res=>{
    console.log(res.data)
    setData(res.data)
  }).catch(err=>{
    console.log("error")
  })
}, [])



  return (
    <div className="App">
    
      <h1>NASA Photo Of the Day</h1>
      <Body url={data.url} title={data.title} description = {data.explanation}/>
      <Footer date={data.date}/>
    </div>
  );
}

export default App;
