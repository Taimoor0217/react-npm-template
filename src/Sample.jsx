import React from 'react'
export default function Error(props){
    const cardStyle = {
        "borderRadius" : "10px",
        "height": "70vh",
        "boxShadow": "0 0.4rem 4rem #999999",
        "position": "relative",
        "content": "*",
        "clear": "both",
       "minWidth": "50rem",
       "maxWidth": "100er",
       "margin": "10rem 2rem 10rem 2rem"
    }
    const oops = {
        fontSize: "7rem",
        display: "block",
        fontFamily: "sans-serif",
        letterSpacing: "10px",
        color: "gray",
    }
    const message={
        fontSize: "1rem",
        textAlign:"center",
        fontWeight: "400",
        fontFamily: "sans-serif",
        letterSpacing: "0.7rem",
        color: "gray",
        display: "block",

    }
    const holder={
        position: "absolute",
        left: "50%",
        top: "30%",
        transform: "translateX(-50%)",
        display: "table",
        clear: "both",
        content: "*",
    }
    const buttonStyle = {
        "margin" : "2rem 2rem 2rem 10rem",
        textDecoration: "none",
        color: "gray",
        display: "inline-block"
    }
    return(
        <div style={cardStyle} className="card">
            <div style={holder}>
                <span style={ props.oopsStyle ?  props.oopsStyle: oops}> Hello! </span>
                <span style={ props.messageStyle? props.messageStyle: message}>happy to have you back</span>
                {props.button?(
                    <props.button />
                ):(
                    <a style={buttonStyle} href="/"> Explore &#8594; </a>
                )}
            </div>
        </div>
    )
}