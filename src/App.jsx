import { useState } from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="space-y-3">
        <h1> Count Catcher </h1>

        <p> Count is currently {count} </p>

        <button
          className="p-2 rounded-md bg-neutral-600 text-white"
          onClick={() => setCount((count) => count+= 1)}>
         Increase Count
        </button>
      </div>
    </>
  )
}

export default App
