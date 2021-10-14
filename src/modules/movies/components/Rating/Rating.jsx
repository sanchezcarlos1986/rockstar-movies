import React, {useContext} from 'react';
import {MoviesContext} from '../../contexts/movies.context';
import {STARS} from '../../constants/variables';
import {Rating as Component} from './Rating.styles';

const Rating = () => {
  const {rating, setRating} = useContext(MoviesContext);
  const [maxValue, setMaxValue] = React.useState(null);
  const buttons = ['one', 'two', 'three', 'four', 'five'];

  const handleClick = value => {
    const newRating = value !== rating ? value : null;
    setRating(newRating);
    setMaxValue(newRating ? STARS[value].max : null);
  };

  const isSelected = btn => maxValue && maxValue >= STARS[btn].max;

  return (
    <Component.Container>
      <li>
        {buttons.map(btn => (
          <button key={btn} onClick={() => handleClick(btn)}>
            <span
              className={`fa fa-star ${
                isSelected(btn) ? 'checked' : ''
              }`}></span>
          </button>
        ))}
      </li>
    </Component.Container>
  );
};

export default Rating;
