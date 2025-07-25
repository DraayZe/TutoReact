import {useState} from "react";

const titre = "Hello, world"
const showTitle = false
const todos = [
   "Faire les courses",
   "Aller à la gym" ,
  "Lire un livre"
    ]

function App() {


    const [isTermAccepted, setIsTermAccepted] = useState(false)

  return <>
    <Title id="monid" className="maclass" />
    <p>testtt</p>
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
    <Compteur />
      <Formulaire/>
      <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
      <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
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


function Formulaire(){

    return <form>
        <input type="text" placeholder="Entrez votre nom" name="firstname" />

    </form>
}

function CGUCheckbox({checked, onCheck}) {
    return <div>
        <label>
            <input type="checkbox"
                   onChange={(e) => onCheck(e.target.checked)}
                   checked={checked} />
            J'accepte les CGU
        </label>
    </div>

}

export default App
