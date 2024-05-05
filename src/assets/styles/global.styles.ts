import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html{
  height: 100vh;

}

  body {
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    
  @keyframes bg-scrolling-reverse {
    100% {
      background-position: 50px 50px;
    }
  }

  @keyframes bg-scrolling {
    0% {
      background-position: 50px 50px;
    }
  }

    color: #999;
    text-align: center;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC") repeat 0 0;
    -webkit-animation: bg-scrolling-reverse 0.92s infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
  }
  

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;

  }
`;
