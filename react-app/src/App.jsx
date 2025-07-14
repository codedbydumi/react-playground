import './App.css'
import Body from './Componenets/home/Body';

function App() {
  
  const name1 = "D"; 
  const name2 = "T"; 
  const name3 = "A";
  const Fname = (a,b,c) => {
  return  `${a}   ${b}  ${c}`;


  } 

  const a =150;
  const arr = ["apple","bannaa"];
  return (

    <>
    <h1>Dumindu</h1>
    <p> {20*10}%  great</p>
    <p>{a} </p>
    <p>{a>11 ? "oh yea" : "hell no"}</p>

<p>
  Full Name  : {Fname ("Dumindu","Thushan","Abhaywickrama")}
  <br />
  he likes : {arr[1]}
</p>
<Body>h</Body>

   </>
  )
}

export default App
