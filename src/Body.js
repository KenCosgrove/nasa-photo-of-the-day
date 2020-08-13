import React from "react";



export default function Body(props){
    const {title, href, description} = props

    if (!props.url) return <h3>Loading...</h3>;
    return (

<div>
<img href={href} alt="POTD"/>
<h3>{title}</h3>
<p> {description}</p>

</div>


)
}

