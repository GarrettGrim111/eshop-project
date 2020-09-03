import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Open Sans Condensed", sans-serif;
    padding: 20px 40px;
    

    @media (max-width: 800px)
    {
    padding: 10px 
    
}}


  a {
    text-decoration: none;
    color: black;
  }
  `;
