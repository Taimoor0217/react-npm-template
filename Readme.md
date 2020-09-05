# React 500
[![HitCount](http://hits.dwyl.com/{taimoor0217}/{react-500}.svg)](http://hits.dwyl.com/{taimoor0217}/{react-500})

[![https://nodei.co/npm/react-500.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/react-500.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-500)


React 500 is a customizeable common react component for internal server errors.

### Installation

```js
npm install react-500
```

### Usage

```js
import React from 'react';
import Error from "react-500";

export default function App(){
    return(
        <Error />
    )
}

```

![Main](./assets/main.png?raw=true)

### API

Following are the props which can be passed to customize the behaviour

| Prop | Type |
| ------ | ------ |
| oopsStyle | Javascript Object |
| messageStyle | Javascript Object |
| button | Jsx Element |

### Customization

customize the text as follows

```js

export default function App(){
    const OopsStyle = {
        fontSize: "6rem",
        display: "block",
        fontFamily: "sans-serif",
        letterSpacing: "10px",
        color: "#b5d5ff",
        fontStyle: "italic"
    }
    const messageStyle={
        fontSize: "1.2rem",
        textAlign:"center",
        fontWeight: "400",
        fontFamily: "roboto",
        letterSpacing: "0.7rem",
        color: "pink",
        display: "block",

    }
    return(
        <Error 
            oopsStyle={OopsStyle} 
            messageStyle={messageStyle} 
        />
    )
}

```

![Main](./assets/oopsStyle.png?raw=true)

any custom jsx component can be added in place on the homepage button

```js

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

```

![Main](./assets/jsxStyle.png?raw=true)
