import { createGlobalStyle } from 'styled-components'

export const AppGlobal = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    border: 0;
}

*,
*:before,
*:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

:focus,
:active {
    outline: none;
}

a:focus,
a:active {
    outline: none;
}

nav,
footer,
header,
aside {
    display: block;
}

html,
body {
    height: 100vh;
    width: 100vw;
    font-size: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(
        rgba(135, 60, 255, 0.4),
        rgba(135, 60, 255, 0) 80%
    ),
    linear-gradient(
        -45deg,
        rgba(120, 155, 255, 0.9) 25%,
        rgba(255, 160, 65, 0.9) 75%
    );
    background-repeat: no-repeat;
    background-size: cover;
}

input,
button,
textarea {
    font-family: inherit;
}

input::-ms-clear {
    display: none;
}

button {
    cursor: pointer;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

a,
a:visited {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    color: black;
}

a:hover {
    text-decoration: none;
}

ul li {
    list-style: none;
}

img {
    vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: 400;
}

::-webkit-scrollbar {
    width: 0;
  }
`
