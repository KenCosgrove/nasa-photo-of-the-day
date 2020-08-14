import React, {useState, useEffect} from "react";
import "./App.css";
import Body from './Body'
import Footer from './Footer'
import axios from "axios"
import styled from 'styled-components'

const Blueh1 = styled.h1`
color:red;
font-size: 3rem;
text-shadow: 2px 1px white;
`

const WrapperDiv = styled.div`
color: white;
font-weight: bold;
background: url("https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1033&q=80") no-repeat center/cover;
`

function App(props) {
  const [data, setData] = useState(props)
  
useEffect(()=>{
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(res=>{
   // console.log(res.data)
    setData(res.data)
  }).catch(err=>{
    console.log("error")
  })
}, [])

  return (
    <WrapperDiv className="App">
    
      <Blueh1>NASA Photo Of the Day</Blueh1>
      <Body url={data.url} title={data.title} description = {data.explanation}/>
      <Footer date={data.date}/>
    </WrapperDiv>
  );
}

export default App;
