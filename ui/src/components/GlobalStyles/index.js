import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700");
  body {
    background: #EEEEEE;
    color: #303034;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  * {
    font-size: 15px;
    font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  }


  /* $primary: #ff7b11; */

`;
