import React, { useState } from "react";
import Items from "./../Items/Items";
import MoveButton from "./../MoveButton/MoveButton";
import Add from "./../Add/Add";
import "./styles.scss";

const Content: React.FC = () => {
  const [items, setItems] = useState<string[]>(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9"]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeItem, setActiveItem] = useState<number>(0);


  return (
    <>
      <div className="content">
        <MoveButton
          left
          activeItem={activeItem}
          items={items}
          setActiveItem={setActiveItem}
        />
        <Items
          items={items}
          activeItem={activeItem}
          visibleItems={visibleItems}
          setActiveItem={setActiveItem}
          setVisibleItems={setVisibleItems}
        />
        <MoveButton
          activeItem={activeItem}
          items={items}
          setActiveItem={setActiveItem}
        />
      </div>
      <Add
        setItems={setItems}
        setActiveItem={setActiveItem}
      />
    </>
  )
}

export default Content;
