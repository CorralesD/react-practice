import { useState } from 'react';
import s from './style.module.css';

export const MenuListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const setHover = () => {
    setIsHovered(true);
  };

  const removeHover = () => {
    setIsHovered(false);
  };

  const setBackgroundColor = () => {
    if (isHovered) {
      return '#a5e9ff';
    } else {
      if (props.isSelected) {
        return '#26baea';
      } else {
        return '#eff0ef';
      }
    }
  };

  const onItemClick = () => {
    props.onClick(props.difficulty);
  };

  return (
    <div
      onClick={onItemClick}
      className={s.container}
      onMouseEnter={setHover}
      onMouseLeave={removeHover}
      style={{ backgroundColor: setBackgroundColor() }}
    >
      Set to : {props.difficulty}
    </div>
  );
};
