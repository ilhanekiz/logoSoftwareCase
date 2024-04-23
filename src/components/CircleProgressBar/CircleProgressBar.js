import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import './CircleProgressBar.scss';

const CircleProgressBar = (props) => {
  const { percentage, size } = props;

  return (
    <div className={`circular ${size}`}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
};

export default CircleProgressBar;