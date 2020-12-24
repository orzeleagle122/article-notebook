import {createGlobalStyle} from 'styled-components';


const GlobalStyle=createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');


    *,*::before,*::after{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5% // 1rem === 16px, ustalenie wielkosci jednostki rem na 10px
    }

    body {
        font-family: "Montserrat";
        font-size: 1.6rem; //ale bazowa wielkosc to 16 px ----- happy rems
    }
`;

export default GlobalStyle