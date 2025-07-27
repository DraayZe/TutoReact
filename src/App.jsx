import {useState} from "react";
import {Input} from "./components/forms/Input.jsx";
import {Checkbox} from "./components/forms/Checkbox.jsx";
import {ProductRow} from "./components/products/ProductRow.jsx";
import {ProductCategoryRow} from "./components/products/ProductCategoryRow.jsx";


const titre = "Hello, world"
const showTitle = false
const todos = [
   "Faire les courses",
   "Aller à la gym" ,
  "Lire un livre"
    ]

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
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

      <div className="container mx-3">
          <h1 className="underline text-3xl mt-4 mb-2">PREMIER TP</h1>
          <SearchBar />
          <ProductTable products={PRODUCTS} />
      </div>

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

function SearchBar(){
    return <div>
        <div className="mb-3">
            <Input value="" onChange={() => null} placeholder="Rechercher..." />
            <Checkbox id="stocked" checked={false } onChange={() => null} label="N'afficher que les produits en stock" />
        </div>
    </div>
}

function ProductTable({products}) {

    const rows = [];
    let lastCategory = null;

    for (let product of products) {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} name={product.category}/>);
        }
        lastCategory = product.category;
        rows.push(<ProductRow key={product.name} product={product}/>);
    }

return <table className="table-auto">
    <thead>
    <tr>
        <th>Nom</th>
        <th>Prix</th>
    </tr>
    </thead>
    <tbody>
        {rows}
    </tbody>
</table>
}

export default App
