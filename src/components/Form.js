import { useState } from "react"

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()

    // Check if the description is empty
    if (!description) return ""

    // Create a new item
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    }
    console.log(newItem)

    // Call the onAddItems function that was passed to the component
    onAddItems(newItem)

    // Clear the input fields
    setDescription("")
    setQuantity(1)
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>
      <select
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value)
          setQuantity(Number(e.target.value))
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          console.log(e.target.value)
          setDescription(e.target.value)
        }}
      ></input>

      <button type="submit">Add</button>
    </form>
  )
}
