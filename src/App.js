import React,{ useState } from "react";
import "./styles.css";



export default function App() {
  const [number, setNumber] = useState(0)
  const [usado, setUsado] = useState(0)
  const [names, setNames] = useState(['Brian', 'Ryan', 'Joe'])
  return (
    <div className="App">
    <Header className="header"/>
      <h3>Hola Mundo! desde CodeSanbox!</h3>
      <p>Numero: {number}</p>
      <button onClick={()=>setNumber(number + 1) & setUsado(usado + 1)}>Aumentar</button>
      <button onClick={()=>setNumber(number - 1) & setUsado(usado + 1)}>Decrementar</button>
      <p> Has usado el Estado de Numero: <strong>{usado}</strong> veces</p>
      <Ejemplo
        nombre={'Javascript'}
        react={'ReactJS'}
      />
      {names.map((name,index)=>{
      return (<Person
       name={name}
       key={index}
       />)})}
    </div>
  );
}
const isLogin = true;
const noLogin = <h1>No se muestra el mensaje</h1>
const  Ejemplo = (props)=>{
  return(
    <>
    <h1>Ejemplo</h1>
    {isLogin ? <h1>Bienvenido!</h1> : noLogin}
    </>
  )
}

const Person = ({name})=>{
  return(<p>Bienvenido a React : {name}</p>)
}
const Header = ()=>{
  return(
    <nav className="nav">
      <ul className="nav ul">
        <li>Home</li>
        <li>Blog</li>
        <li>About</li>
      </ul>
    </nav>
  )
}