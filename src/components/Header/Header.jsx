import imageRef from "../../assets/Header_438967493_1.jpg";
import "./Header.css"

const reactDescriptions = ['Fundamentals','Crucial','Core']; 

function genRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}

export default function Header(){
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
    <img src={imageRef} alt="Header" />
    <h1>Prompts library</h1>
    <p>
        A collection of prompts that have been tested in LLM and have yielded good results.
    </p>
  </header>)
}