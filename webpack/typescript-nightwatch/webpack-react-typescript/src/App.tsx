import React, { useState, useEffect } from 'react';

import './main.css';
import imageOne from './images/svgTwo.svg'
import imageTwo from './images/svgImage.svg';
import { CardsOne } from './cards';
import $ from 'jquery';




export const App = () => {
    
    return  <>
    <h1>Welcome to react app</h1>
    <div className="img-fluid">
    <img src={imageTwo} alt="image" className="img-fluid imageResize" />

    </div>
    <p>So this webpage was made to support react, but the backend is managed <br />
        with webpack, leading to a lighter and more accessible app. <br />
        I dont use .jsx files. The web is set to use typescript files, so components are .tsx <br />
        The syntax is the same as in react. The web was built <br />
        using react syntax, two const Apps are in a .tsx file, and <br />
         they are rendered by the html
          </p>
    <CardsOne/>
    
    </>
}

export const AppTwo = () =>{
    
    return <>
    <h1>Hello,Welcome</h1>
    <p>See this SVG resize making your screen smaller. <br /> <br />
        Visual impact is important this days, and the use of <br></br>
        formats like .gif and .SVG help create a powerful<br />
        and fluid visual impression in the user. <br />
        The way the svg perfectlt resizes in this page. <br />
        Transmit neatness to the user</p>
        <div className="img-fluid">
    <img src={imageOne} alt="image" className="img-fluid imageResize" />
    <div id='apiDiv'></div>

    </div>

        <a href="./index.html">
<button type="button" className="btn btn-danger" id='botonSeis'>go back home</button>
</a>
    </>
}

export default AppTwo