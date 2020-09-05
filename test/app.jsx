import React from 'react';
import Error from "../src/500.jsx";
const ButtonStyle = {
    backgroundColor: "#2424e8a8",
    color: "white",
    padding: "10px 25px",
    borderRadius: "20px",
    marginLeft: "8.5rem",
    marginTop: "2rem",
    border: 0,
}
const Button = ()=>{
    return(
        <button style={ButtonStyle} onClick={()=>alert(1)}>
            Back Button
        </button>
    )
}
export default function App(){
    return(
        <Error button={Button}/>
    )
}