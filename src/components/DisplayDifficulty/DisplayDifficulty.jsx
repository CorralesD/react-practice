import s from './style.module.css'

export const DisplayDifficulty = (props) => {
  return (
    <div className={s.container}>
      {props.difficulty
        ? `Difficulty set to ${props.difficulty}`
        : 'No Difficulty Set'}
    </div>
  );
};
