import React from "react";
import styled from 'styled-components'


const Flexbox = styled.div`
display:flex;
justify-content: space-around;
width: 50%;
margin: 0 auto;
list-style: none;
padding: 1.2rem;
`

export default function Footer(props){
    const {date} = props
    if (!props.date) return <h4>Loading...</h4>;
    return (
        <Flexbox>
            <li> {date} </li>
            <li> <a href="https://www.nasa.gov/">Nasa Home</a> </li>
        </Flexbox>
    )
}