import { MenuListItem } from '../MenuListItem/MenuListItem';
import s from './style.module.css';
import { DIFFICULTIES } from './constants';

export const MenuList = (props) => {
  console.log(props.difficulty);
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((difficulty, index) => {
        console.log(difficulty, index);
        return (
          <MenuListItem
            key={index}
            isSelected={props.difficulty === difficulty}
            onClick={props.onItemClick}
            difficulty={difficulty}
          />
        );
      })}
    </div>
  );
};
