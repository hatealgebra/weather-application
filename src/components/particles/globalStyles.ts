import { createGlobalStyle } from "styled-components";
import theme from "./themeDefault";

export const GlobalStyles = createGlobalStyle`
   @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');

* {
    margin:0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {font-size: 90%;


@media only screen and (min-width: 600px){
    font-size: 105%;
}
@media only screen and (min-width: 801px){
    font-size: 110%;
}
@media only screen and (min-width: 1200px){
    font-size: 120%;
}
@media only screen and (min-width: 1600px){
    font-size: 130%;
}

} 

body {
  background: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.3;
  padding: 0 !important;
  color: ${theme.color.black};

}

.lock-scroll-body{
  overflow: hidden;
}

.app{
  position: relative;
}

button, a {
    cursor: pointer;
}

/* Typography */

h1 {
  margin-top: 0;
  font-size: 2.488rem;
  font-weight: ${theme.typography.weight.semibold}
}

h2 {font-size: 2.074rem;
  font-weight: 100;
  margin: 0.3em auto;
  text-transform: capitalize;
  span {
    font-weight: ${theme.typography.weight.semibold};
    margin-right: 10px;
    text-transform: capitalize;
  }
}

h3 {font-size: 1.728rem;

font-weight: ${theme.typography.weight.semibold};
}

h4 {font-size: 1.54rem;
  font-weight: ${theme.typography.weight.semibold};
  
  
}

h5 {font-size: 1.2rem;
  font-weight: ${theme.typography.weight.semibold};
}

p{ font-size: ${theme.typography.size.body};
color: ${theme.color.black};
font-weight: 300;
line-height: 1.6;
}
.small, .text_small {font-size: ${theme.typography.size.label};}

.number{
  font-family: "Oswald", sans-serif;
  font-weight: 600;
}


`;
