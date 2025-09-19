import { Checkbox } from "./components/forms/Checkbox"
import { Input } from "./components/forms/Input"


const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]


function App() {
  return <div className="container my-3">
    <SearchBar />
  </div>
}

function SearchBar() {
  return <div>
    <div className="mb-3">
      <Input value="" onChange={() => null} placeholder="Rechercher..." />
      <Checkbox checked={false} onChange={() => null} label="N'afficher que les produits en stock" />
    </div>
  </div>
}

export default App
