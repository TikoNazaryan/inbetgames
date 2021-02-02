import classnames from "classnames";
import { IMoveButton } from "./../../interfaces";
import "./styles.scss";

const MoveButton = ({
  left,
  items, 
  activeItem, 
  setActiveItem
}: IMoveButton) => {
  
  const handleClick = () => {
    if(left && activeItem === 0)
      setActiveItem(items.length - 1);
    else if(left)
      setActiveItem(activeItem - 1);
    else if(!left && (activeItem === items.length - 1))
      setActiveItem(0);
    else if(!left)
      setActiveItem(activeItem + 1);
  }
  
  return (
    <div 
      className={classnames("move-button", {
        "move-button--left": left,
        "move-button--right": !left 
      })}
      onClick={handleClick}
    ></div>
   )
}

export default MoveButton;
