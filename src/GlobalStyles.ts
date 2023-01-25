import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0
}

body {

  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}




a {
  text-decoration: none
}

img {
  
  object-fit: contain;
  height: 100%;
  width: 100%
}

.custom-scrollbar {
  display:flex;
  flex-direction: column;
  width: 20%;
  gap: 30px;
  height: 300px;
  overflow: auto;
  overflow-x:hidden;
    //firefox 
    scrollbar-width: thin;          
  scrollbar-color: #5ECE7B #fff;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 3px;    

  display:block;
  border-radius:100vw;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #fff; 
  border-radius:100vw;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #5ECE7B;    
  border-radius:100vw;
}

.carousel  {
  height: 100%
}
.carousel .slider-wrapper, .carousel .slider {
  width:100%;
  height:100%
}



.carousel .control-arrow .control-next{
    top: 0;
    color: #fff;
    font-size: 26px;
    bottom: 0;
    margin-top: 0;
    padding: 5px;
    background: black;
    display: flex;
    align-items: flex-end;
}


`;
