import React from "react";

export default function Footer(props){
    const {date} = props
    if (!props.date) return <h4>Loading...</h4>;
    return (
        <div>
            <li> {date} </li>
            <li> <a href="https://www.nasa.gov/">Nasa Home</a> </li>
           
        </div>
    )
}