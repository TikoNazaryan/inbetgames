import { useEffect, useRef, useCallback } from "react";
import classnames from "classnames";
import { IItems } from "./../../interfaces";
import "./styles.scss";


const Items = ({
  items,
  visibleItems, 
  activeItem,
  setActiveItem,
  setVisibleItems
}: IItems) => {
    
  const itemsRef = useRef<HTMLDivElement>(null);
  const handleItemClick = (index: number) => setActiveItem(index);

  const getVisibleItems = useCallback((index:any) => {    
    if(itemsRef && itemsRef.current)
    {
      const parentWidth = itemsRef.current.offsetWidth;
      const DOMItems = itemsRef.current.children;
      for(let i = 0; i < DOMItems.length; i++)
      {
        let childsWidth = 0;
        let newVisibleItems:number[] = [];
        for(let j = i; j < DOMItems.length; j++)
        {
          if(childsWidth + DOMItems[j].clientWidth + 2 > parentWidth)
          {
            if(newVisibleItems.includes(activeItem))
              return newVisibleItems;
            else
              break;
          }
          
          newVisibleItems.push(j);
          childsWidth += DOMItems[j].clientWidth + 12;
        }
        if(newVisibleItems[newVisibleItems.length - 1] === items.length - 1)
          return newVisibleItems;
      }
    }
    return [];
  }, [activeItem, items])

  const handleWindowResize = useCallback(() => setVisibleItems(getVisibleItems(0)), [setVisibleItems, getVisibleItems]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [handleWindowResize])

  useEffect(() => {
    if(itemsRef && itemsRef.current)
    {
      let firstVisibleItem = itemsRef.current.querySelector<HTMLDivElement>(".items__item--visible")?.offsetLeft;
      if(firstVisibleItem !== undefined)
        itemsRef.current.scrollLeft = firstVisibleItem;
    }
    if(!visibleItems.includes(activeItem))
      setVisibleItems(getVisibleItems(0));

  }, [activeItem, items, visibleItems,  setVisibleItems, getVisibleItems])

  return (
    <div className="items" ref={itemsRef}>
      {items.map((item:any, index:any) => (
        <div
          key={index}
          className={classnames("items__item", {
            "items__item--active": activeItem === index,
            "items__item--visible": visibleItems.includes(index)
          })}
          onClick={() => {handleItemClick(index)}}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Items;
