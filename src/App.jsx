import {useState} from "react";

const titre = "Hello, world"
const showTitle = false
const todos = [
   "Faire les courses",
   "Aller à la gym" ,
  "Lire un livre"
    ]

function App() {

  return <>
    <Title id="monid" className="maclass" />
    <p>testtt</p>
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
    <Compteur />
  </>


}

function Title({...props}) {

  return  <h1 style={{color:"red", backgroundColor: "blue "}} {...props}>{titre}</h1>

}

function Compteur() {

    const [person, setPerson] = useState({
          firstName : "John",
          lastName : "Doe",
          age: 30
    }
    )


    const increment = () => {
      setPerson({...person, age: person.age + 1})
  }

  return <>
  <p>Le monsieur s'appelle {person.firstName} et son âge {person.age}</p>
    <button onClick={increment}>Incrémenter son âge de 1 année</button>
  </>
}

export default App
