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
  </>
}

function Title({...props}) {

  return  <h1 style={{color:"red", backgroundColor: "blue "}} {...props}>{titre}</h1>

}

export default App
