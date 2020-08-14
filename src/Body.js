import React from "react";
import styled from 'styled-components'


const BodyStyle = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 70%;
margin: 0 auto;
`
const LargeH3 = styled.h3`
font-size: 2rem;
color: white;
text-shadow: 2px 1px red;
`

export default function Body(props){
    const {title, url, description} = props

    if (!props.url) return <h3>Loading...</h3>;
    return (
    <BodyStyle>
        <img src={url} alt="POTD"/>
        <LargeH3>{title}</LargeH3>
        <p> {description}</p>
    </BodyStyle>
)
}

