import { useState } from "react";
import { IAdd } from "./../../interfaces";
import "./styles.scss";

const Add = ({ setItems, setActiveItem }: IAdd) => {
  const [newItem, setNewItem] = useState("")
  
  const handleInputChange = (e:any) => setNewItem(e.target.value);
  const handleAddButton = () => {
    setItems((prev: any) => {
      setActiveItem(prev.length);
      return[...prev, newItem]
    })
  }

  return (
    <div className="add">
      <input 
        type="text"
        className="add__input"
        placeholder="Type..."
        value={newItem}
        onChange={handleInputChange} 
      />
      <div
        className="add__button"
        onClick={handleAddButton}
      >Add +</div>
    </div>
  )
}

export default Add;