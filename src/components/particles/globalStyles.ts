import "@fontsource/poppins";
import "@fontsource/oswald";
import "@fontsource/yellowtail"; // Defaults to weight 400.

import { createGlobalStyle } from "styled-components";
import themeDefault from "./Themes";

const GlobalStyles = createGlobalStyle<{ theme: typeof themeDefault }>`

@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');

* {
    margin:0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {font-size: 90%; box-sizing: border-box;}


@media only screen and (min-width: 600px){
    font-size: 100%;
}
@media only screen and (min-width: 801px){
    font-size: 105%;
}
@media only screen and (min-width: 1200px){
    font-size: 110%;
}
@media only screen and (min-width: 1600px){
    font-size: 115%;
}



body {
  background: ${({ theme }) => theme.color.body};
  font-family: "Poppins";
  font-weight: 400;
  line-height: 1.3;
  padding: 0 !important;
  color: ${({ theme }) => theme.color.text};
  overflow-x:hidden;
  width: 100%; 
  transition: ease-out .5s ;
}

.lock-scroll-body{
  overflow: hidden;
}

.app{
  position: relative;
}

button {
  font-family: "Poppins";
}

button, a {
    cursor: pointer;
}

/* Typography */

h1 {
  margin-top: 0;
  font-size: 3.2rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold}

}

h2 {
  font-size: ${({ theme }) => theme.typography.size.h2};
  font-weight: 100;
  margin: 0.3em auto;
  text-transform: capitalize;
  span {
    display: inline-block;
    font-weight: ${({ theme }) => theme.typography.weight.black};
    margin-right: 10px;
    text-transform: capitalize;
  }
}

h3 {font-size: 1.728rem;

font-weight: ${({ theme }) => theme.typography.weight.semibold};
}

h4 {font-size: 1.54rem;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  
  
}

h5 {font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
}

p{ font-size: ${({ theme }) => theme.typography.size.body};
color: ${({ theme }) => theme.color.text};
font-weight: 300;
line-height: 1.8;
margin: 20px 0;
max-width: 500px;
}
.small, .text_small {font-size: ${({ theme }) =>
  theme.typography.size.label};   color: ${({ theme }) => theme.color.text};}

.number{
  font-family: "Oswald";
  font-weight: 600;
}

.flex-items-align--center{
  align-items:center;
}

.force-text-color--theme{
  color:${({ theme }) => theme.color.text}
}

`;

export default GlobalStyles;
